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

export const getPRs = async () => {
  const repo = await getRepoPromise;

  const prs = await repo.listPullRequests({
  });

  return prs;
};

const generateBranchName = async () => {
  const user = await githubClient.getUser().getProfile();
  const username = user.data.login;
  const date = new Date();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  const year = date.getFullYear();
  if (month < 10) {
    month = '0' + month;
  }
  if (day < 10) {
    day = '0' + day;
  }
  return `translations-${username}-${year}-${month}-${day}`;
};

const createBranch = async (base = 'master') => {
  const repo = await getRepoPromise;
  const ref = await repo.getRef(`heads/${base}`);
  console.log('ref:', ref);
  const branchName = await generateBranchName();
  const newBranch = await repo.createBranch(base, branchName);
  console.log(newBranch);
  return newBranch;
};

export const makePR = async () => {
  const openPRs = await getPRs();
  console.log(openPRs);
  if (openPRs.data.length === 0) {
    await createBranch();
  }
};
