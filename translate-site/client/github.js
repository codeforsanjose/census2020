import Github from 'github-api';

let githubClient = null;

const BRANCH_LABEL = 'translation_updates';

let getRepoPromise;

let repoName;
let repoUser;

let getPullRequests;
let updatePullRequest;
let makePullRequest;

if (process.env.GITHUB_REPO) {
  [repoUser, repoName] = process.env.GITHUB_REPO.split('/');

  githubClient = localStorage.getItem('GITHUB_TOKEN')
    ? new Github({
      token: localStorage.getItem('GITHUB_TOKEN')
    })
    : null;

  getRepoPromise = githubClient
    ? Promise.resolve(githubClient.getRepo(repoUser, repoName))
    : Promise.reject(new Error('Not authenticated to Github'));

  const generateBranchName = async () => {
    if (githubClient === null) {
      return getRepoPromise;
    }
    const { data: user } = await githubClient.getUser().getProfile();
    const username = user.login;
    return `translations-${username}-${Date.now()}`;
  };

  const createBranch = async (base = 'master') => {
    const repo = await getRepoPromise;
    const branchName = await generateBranchName();
    const newBranch = await repo.createBranch(base, branchName);
    return newBranch.data;
  };

  const writeToBranch = (translations, branchName) => {
    const locales = Object.keys(translations);
    function notifier (handler) {
      notifier.handler = handler;
    };
    let completed = 0;
    const progressEvents = [];
    const notifyProgress = (locale) => {
      progressEvents.push({
        locale,
        completed: ++completed,
        total: locales.length
      });
      if (notifier.handler) {
        while (progressEvents.length > 0) {
          notifier.handler(progressEvents.shift());
        }
      }
    };
    let promise = Promise.resolve();
    if (branchName instanceof Promise) {
      promise = branchName.then((name) => {
        branchName = name;
      });
    }
    promise = promise.then(async () => {
      if (!branchName) {
        throw new Error(`Must specify a branch name to write files to`);
      }
      const repo = await getRepoPromise;
      let nextPromise = Promise.resolve();
      for (const locale of locales) {
        const filePath = `i18n/translations/translations.${locale}.json`;
        // Note: it appears that writes must be sequential; if writing in parallel,
        // you can get errors, seemingly because the Github API is "busy"
        nextPromise = nextPromise.then(
          () => repo.writeFile(
            branchName,
            filePath,
            JSON.stringify(translations[locale], null, '  '),
            `Translation files updated at ${new Date()}`,
            {}
          )
        );
        nextPromise.then(
          () => {
            notifyProgress(locale);
          }
        );
      }
      return nextPromise;
    });

    return {
      promise,
      progressNotifier: notifier
    };
  };

  getPullRequests = async () => {
    if (githubClient === null) {
      return getRepoPromise;
    }
    const { data: user } = await githubClient.getUser().getProfile();

    const prs = await githubClient.search().forIssues({
      q: [
        `author:${user.login}`,
        'type:pr',
        'state:open',
        `repo:${process.env.GITHUB_REPO}`,
        'label:auto_created_translation'
      ].join(' ')
    });

    return prs.data;
  };

  updatePullRequest = ({
    translations,
    number
  }) => {
    return writeToBranch(translations, getRepoPromise.then(
      (repo) => repo.getPullRequest(number)
    ).then(({ data }) => {
      return data.head.ref;
    }));
  };

  makePullRequest = ({
    translations,
    branchName
  }) => {
    let promise;
    if (branchName) {
      promise = Promise.resolve(branchName);
    } else {
      promise = createBranch().then((branch) => {
        branchName = branch.ref.replace(/^refs\/heads\//, '');
      });
    }

    const { promise: writePromise, progressNotifier } = writeToBranch(translations, promise);
    promise = writePromise.then(async () => {
      const repo = await getRepoPromise;
      const { data: pr } = await repo.createPullRequest({
        title: `Update translations for ${Object.keys(translations).join(', ')}`,
        head: branchName,
        base: 'master'
      });
      await githubClient.getIssues(pr.user.login, repoName).editIssue(pr.number, {
        labels: [
          BRANCH_LABEL
        ]
      });
      return pr;
    });

    return {
      promise,
      progressNotifier
    };
  };
} else {
  getPullRequests = updatePullRequest = makePullRequest = () => {
    throw new Error('Github integration is not enabled');
  };
}

export { getPullRequests };

export { updatePullRequest };

export { makePullRequest };
