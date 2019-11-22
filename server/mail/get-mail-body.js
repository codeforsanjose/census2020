// const { getIntl } = require('./utils');
const { createElement } = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const { ConfirmationEmail } = require('./mail-components/compiled/ConfirmationEmail');

// const interestMessageIds = {
//   volunteer: 'components.Contact.fields.interest.options.volunteer',
//   presentation: 'components.Contact.fields.interest.options.requestPresentation',
//   information: 'components.Contact.fields.interest.options.information',
//   other: 'components.Contact.fields.interest.options.other'
// };

// module.exports.getConfirmationMessage = ({ language, name, interests, comment }) => {
//   return `
// ${getIntl(language).formatMessage({
//     id: 'email.messages.confirmation.greeting',
//     defaultMessage: 'Hi {name}',
//     values: {
//       name
//     }
//   })}
// <p>
// ${getMessage(language, {
//     id: 'email.messages.confirmation.thankYou',
//     defaultMessage: 'Thank you for your interest in the 2020 Census effort in San Jose.'
//   })}
// </p>
// <p>
// ${getMessage(language, {
//     id: 'email.messages.confirmation.usersMessageIntro',
//     defaultMessage: 'The following message was sent by you to the City of San Jose Census Office:'
//   })}
// </p>
// <blockquote>
// <h3>
// ${getMessage(language, {
//     id: 'email.messages.confirmation.interestsHeader',
//     defaultMessage: 'I have an interest in:'
//   })}
// </h3>
// <p>
// <ul>
// ${interests.map(
//     (interest) => `<li>${getMessage(language, {
//       id: interestMessageIds[interest]
//     })}</li>`
//   ).join('\n')}
// </ul>
// </p>
// ${
//   comment
//     ? `
// <h3>
// ${getMessage(language, {
//     id: 'email.messages.confirmation.commentsHeader',
//     defaultMessage: 'Additional comments:'
//   })}
// </h3>
// <p>
// ${comment}
// </p>
//     `
//     : ''
// }
// </blockquote>
// <p>
// ${getMessage(language, {
//     id: 'email.messages.confirmation.conclusion',
//     defaultMessage: 'Thank you again for your interest. Someone will respond back to you within two business days.'
//   })}
// </p>
// &mdash;
// ${getMessage(language, {
//     id: 'email.messages.confirmation.signature',
//     defaultMessage: 'City of San Jose 2020 Census Office'
//   })}
// `;
// };

module.exports.getConfirmationMessageFromReact = ({ language, name, interests, comment }) => {
  return renderToStaticMarkup(
    createElement(
      ConfirmationEmail,
      {
        locale: language,
        name,
        interests,
        comment
      }
    )
  );
};
