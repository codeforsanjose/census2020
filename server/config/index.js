const environment = process.env.NODE_ENV || 'development';

const DEFAULT_PORT = 3000;

module.exports = {
  app: {
    environment,
    isDev: environment === 'development',
    port: process.env.PORT || DEFAULT_PORT
  },
  mail: {
    host: process.env.MAIL_SMTP_SERVER,
    port: process.env.MAIL_SMTP_PORT,
    username: process.env.MAIL_SMTP_USERNAME,
    password: process.env.MAIL_SMTP_PASSWORD,
    isSecure: Boolean(process.env.MAIL_SMTP_IS_SECURE),

    inquiryMessage: {
      subject: process.env.MAIL_TO_CENSUS_SUBJECT,
      address: process.env.MAIL_TO_CENSUS_ADDRESS,
      fromAddress: process.env.MAIL_TO_CENSUS_FROM_ADDRESS,
      introduction: process.env.MAIL_MESSAGE_INTRODUCTION
    }
  }
};
