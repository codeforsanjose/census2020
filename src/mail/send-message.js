const nodemailer = require('nodemailer');
const debug = require('debug')('census2020:server:mail');

const Config = require('../config');

debug.error = debug;
debug.log = console.log.bind(console);
debug.debug = debug.log;
debug.info = console.info.bind(console);

const getTransporter = () => {
  return nodemailer.createTransport({
    host: Config.mail.host,
    port: Config.mail.port,
    auth: {
      user: Config.mail.username,
      pass: Config.mail.password
    },
    secure: Config.mail.isSecure,
    logger: debug
  });
};

module.exports.sendToCensusDept = async ({
  name,
  organization,
  email,
  language,
  zip,
  interest,
  comment
}) => {
  debug('sendToCensusDept() called with the following arguments:', {
    name,
    organization,
    email,
    language,
    zip,
    interest,
    comment
  });

  if (!email) {
    throw new Error('No from email provided; cannot send inquiry email');
  }

  const transporter = getTransporter();

  // Will reject (throw error) if config doesn't work
  await transporter.verify();

  const messageText = `Name: ${name || 'Not given'}${
    organization
      ? '\nOrganization: ' + organization
      : ''
  }${
    language
      ? '\nLanguage: ' + language
      : ''
  }${
    zip
      ? '\nZip code: ' + zip
      : ''
  }${
    interest
      ? '\nInterest: ' + interest
      : ''
  }${
    comment
      ? '\n\n' + comment
      : ''
  }`;

  debug('About to send message from', {
    messageText
  });

  const sendResults = await transporter.sendMail({
    from: Config.mail.inquiryMessage.fromAddress,
    replyTo: email,
    to: Config.mail.inquiryMessage.address,
    subject: Config.mail.inquiryMessage.subject,
    text: messageText
  });

  debug('Send mail to Census department result:', sendResults);
};
