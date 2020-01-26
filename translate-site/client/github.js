import Github from 'github-api';

const githubClient = localStorage.getItem('GITHUB_TOKEN')
  ? new Github({
    token: localStorage.getItem('GITHUB_TOKEN')
  })
  : null;

const REPO_NAME = 'turnerhayes/census2020';

const [repoUser, repoName] = REPO_NAME.split('/');

const getRepoPromise = githubClient
  ? githubClient.getRepo(repoUser, repoName)
  : Promise.reject(new Error('Not authenticated to Github'));

export const getPullRequests = async () => {
  // const repo = await getRepoPromise;
  const { data: user } = await githubClient.getUser().getProfile();

  const prs = await githubClient.search().forIssues({
    q: `author:${user.login} type:pr state:open repo:${REPO_NAME} label:auto_created_translation`
  });

  // const prs = await repo.listPullRequests({
  //   head: `user:${user.login}`
  // });

  return prs.data;
};

const generateBranchName = async () => {
  const user = await githubClient.getUser().getProfile();
  const username = user.data.login;
  const date = new Date();
  // let month = date.getMonth() + 1;
  // let day = date.getDate();
  // const year = date.getFullYear();
  // if (month < 10) {
  //   month = '0' + month;
  // }
  // if (day < 10) {
  //   day = '0' + day;
  // }
  return `translations-${username}-${date.getTime()}`;
};

const createBranch = async (base = 'master') => {
  const repo = await getRepoPromise;
  await repo.getRef(`heads/${base}`);
  const branchName = await generateBranchName();
  const newBranch = await repo.createBranch(base, branchName);
  return newBranch;
};

const writeToBranch = async (translations, branchName) => {
  const repo = await getRepoPromise;
  for (const locale of Object.keys(translations)) {
    const filePath = `i18n/translations/translations.${locale}.json`;
    // Note: it appears that writes must be sequential; if writing in parallel,
    // you can get errors, seemingly because the Github API is "busy"
    await repo.writeFile(
      branchName,
      filePath,
      JSON.stringify(translations[locale], null, '  '),
      `Translation files updated at ${new Date()}`
    );
  }
};

export const updatePullRequest = async ({
  translations,
  pullRequest
}) => {
  const repo = await getRepoPromise;
  const { data: pr } = await repo.getPullRequest(pullRequest.number);
  await writeToBranch(translations, pr.head.ref);
};

export const makePullRequest = async ({
  translations,
  branchName
}) => {
  if (!branchName) {
    const branch = await createBranch();
    branchName = branch.data.ref.replace(/^refs\/heads\//, '');
  }
  await writeToBranch(translations, branchName);
  const repo = await getRepoPromise;
  const { data: pr } = await repo.createPullRequest({
    title: `Update translations for ${Object.keys(translations).join(', ')}`,
    head: branchName,
    base: 'master'
  });
  await githubClient.getIssues(pr.user.login, repoName).editIssue(pr.number, {
    labels: [
      'auto_created_translation'
    ]
  });
};
