const nodemailer = require('nodemailer');
const debug = require('debug')('census2020:server:mail');

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

  const dataKeys = [
    'Name',
    'Organization',
    'Language',
    'Zip code',
    'Interest',
    'Sent at'
  ];

  const data = {
    'Sent at': formatDate(new Date()),
    Name: name || 'Not given',
    Organization: organization,
    Language: language,
    'Zip code': zip,
    Interest: interest
  };

  if (language === 'English') {
    delete dataKeys.Language;
  }

  const rows = [];

  for (const dataKey of dataKeys) {
    if (data[dataKey]) {
      rows.push(`<tr>
<td class="data-item-name">${dataKey}:</td>
<td>${data[dataKey]}</td>
</tr>`);
    }
  }

  const messageHTML = `<!DOCTYPE html>
  <html>
  <head>
    <style>
      .data-item-name {
        font-weight: bold;
        padding-right: 5px;
        text-align: right;
      }
    </style>
  </head>
  <body>
    ${Config.mail.inquiryMessage.introduction || ''}
    <table>
      <tbody>
        ${rows.join('\n')}
      </tbody>
    </table>
    ${
  comment
    ? '\n<p>' + comment + '</p>'
    : ''
}
  </body>
  </html>`;

  debug('About to send message:', {
    messageHTML
  });

  const sendResults = await transporter.sendMail({
    from: Config.mail.inquiryMessage.fromAddress,
    replyTo: email,
    to: Config.mail.inquiryMessage.address,
    subject: Config.mail.inquiryMessage.subject,
    html: messageHTML
  });

  debug('Send mail to Census department result:', sendResults);
};
