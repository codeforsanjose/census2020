const mailgun = require('mailgun-js');
const debug = require('debug')('census2020:server:mail');
const {
  getInquiryMessage,
  getConfirmationMessage,
  getConfirmationMessageSubject
} = require('./get-mail-body');
const Config = require('../config');

const mg = mailgun({
  apiKey: Config.mail.mailgun.apiKey,
  domain: Config.mail.mailgun.domain
});

debug.error = debug;
debug.log = console.log.bind(console);
debug.debug = debug.log;
debug.info = console.info.bind(console);

const sendMessage = (message) => {
  return new Promise((resolve, reject) => {
    mg.messages().send(message, (err, body) => {
      if (err) {
        return reject(err);
      }
      resolve(body);
    });
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

  const sendResults = await sendMessage({
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

  const messageHTML = getConfirmationMessage({
    language,
    name,
    interests
  });

  debug('About to send message:', {
    messageHTML
  });

  const sendResults = await sendMessage({
    from: Config.mail.confirmationMessage.fromAddress,
    to: email,
    subject: getConfirmationMessageSubject({ language }),
    html: messageHTML
  });

  debug('Send confirmation message result:', sendResults);
};
