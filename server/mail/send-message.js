const nodemailer = require('nodemailer');
const debug = require('debug')('census2020:server:mail');
const {
  getInquiryMessage,
  getConfirmationMessage,
  getConfirmationMessageSubject
} = require('./get-mail-body');

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
    secure: Config.mail.isSecure
    // logger: debug
  });
};

module.exports.sendToCensusDept = async ({
  firstName,
  lastName,
  email,
  language,
  interests,
  comment
}) => {
  debug('sendToCensusDept() called with the following arguments:', {
    firstName,
    lastName,
    email,
    language,
    interests,
    comment
  });

  if (!email) {
    throw new Error('No from email provided; cannot send inquiry email');
  }

  const transporter = getTransporter();

  // Will reject (throw error) if config doesn't work
  await transporter.verify();

  const messageHTML = getInquiryMessage({
    language,
    firstName,
    lastName,
    email,
    interests,
    comment
  });

  debug('About to send message:', {
    messageHTML
  });

  const sendResults = await transporter.sendMail({
    from: Config.mail.inquiryMessage.fromAddress,
    replyTo: email,
    to: Config.mail.inquiryMessage.address,
    subject: 'New Response to the 2020 Census Get Involved Form',
    html: messageHTML
  });

  debug('Send mail to Census department result:', sendResults);
};

module.exports.sendConfirmation = async ({
  name,
  organization,
  email,
  language,
  zip,
  interests,
  comment
}) => {
  debug('sendConfirmation() called with the following arguments:', {
    name,
    organization,
    email,
    language,
    zip,
    interests,
    comment
  });

  if (!email) {
    throw new Error('No email provided; cannot send confirmation email');
  }

  const transporter = getTransporter();

  // Will reject (throw error) if config doesn't work
  await transporter.verify();

  const messageHTML = getConfirmationMessage({
    language,
    name,
    interests
  });

  debug('About to send message:', {
    messageHTML
  });

  const sendResults = await transporter.sendMail({
    from: Config.mail.confirmationMessage.fromAddress,
    to: email,
    subject: getConfirmationMessageSubject({ language }),
    html: messageHTML
  });

  debug('Send confirmation message result:', sendResults);
};
