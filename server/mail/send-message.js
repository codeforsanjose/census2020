const nodemailer = require('nodemailer');
const debug = require('debug')('census2020:server:mail');
const { supportedLocaleEnglishNames } = require('../../i18n/supported-locales');
const { getConfirmationMessage, getConfirmationMessageSubject } = require('./get-mail-body');

const Config = require('../config');

debug.error = debug;
debug.log = console.log.bind(console);
debug.debug = debug.log;
debug.info = console.info.bind(console);

/**
 * Formats the date into a human-readable string
 *
 * @param {Date} date the date to format
 *
 * @return {string} the formatted date
 */
const formatDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let amPm = 'AM';

  if (hours >= 12) {
    amPm = 'PM';
    if (hours > 12) {
      hours = hours % 12;
    }
  }

  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  return `${month}/${day}/${year} ${hours}:${minutes}${amPm}`;
};

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

  const messageHTML = `<!DOCTYPE html>
  <html>
  <body>
    The following message was submitted via the 2020 Census Get Involved Form:

    <blockquote>
    Name:
    <p>
    ${firstName} ${lastName}
    </p>

    Email:
    <p>
    <a href="mailto:${email}">${email}</a>
    </p>

    Language:
    <p>
    ${supportedLocaleEnglishNames[language] || language}
    </p>

    Visitor has an interest in:
    <p>
    <ul>
    ${interests.map(
    (interest) => `<li>${interest}</li>`
  )}
    </ul>
    </p>
    ${
  comment
    ? `
        Additional comments:
        <p>
        ${comment}
        </p>
        `
    : ''
}
    </blockquote>

    <p>
    The visitor is expecting a response within two business days. The response was sent at ${formatDate(new Date())}. Reply back to this email to response to the visitor.
    </p>
  </body>
  </html>`;

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
