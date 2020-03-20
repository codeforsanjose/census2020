const environment = process.env.NODE_ENV || 'development';

const DEFAULT_PORT = 3000;

const githubRepo = process.env.CENSUS2020_GITHUB_REPO;
if (githubRepo && !/^\w+\/\w+$/.test(githubRepo)) {
  throw new Error(`${githubRepo} is not a valid Github repository name`);
}

module.exports = {
  app: {
    environment,
    isDev: environment === 'development',
    port: process.env.PORT || DEFAULT_PORT,
    serveTranslateAdmin: Boolean(process.env.CENSUS2020_SERVE_TRANSLATE_SITE)
  },
  mail: {
    host: process.env.MAIL_SMTP_SERVER,
    port: process.env.MAIL_SMTP_PORT,
    username: process.env.MAIL_SMTP_USERNAME,
    password: process.env.MAIL_SMTP_PASSWORD,
    isSecure: Boolean(process.env.MAIL_SMTP_IS_SECURE),
    useSSLv3: Boolean(process.env.MAIL_USE_SSLv3),

    inquiryMessage: {
      address: process.env.MAIL_TO_CENSUS_ADDRESS,
      fromAddress: process.env.MAIL_TO_CENSUS_FROM_ADDRESS
    },

    confirmationMessage: {
      fromAddress: process.env.MAIL_CONFIRMATION_FROM_ADDRESS
    }
  },
  github: {
    isEnabled: Boolean(githubRepo),
    repository: githubRepo,
    appId: process.env.CENSUS2020_GITHUB_APP_ID,
    appSecret: process.env.CENSUS2020_GITHUB_APP_SECRET
  }
};
