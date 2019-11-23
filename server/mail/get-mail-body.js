const { createElement } = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const { ConfirmationEmail, ConfirmationEmailSubject } = require('./mail-components/compiled/ConfirmationEmail');
const { InquiryEmail } = require('./mail-components/compiled/InquiryEmail');

module.exports.getInquiryMessage = ({ language, firstName, lastName, email, interests, comment }) => {
  return renderToStaticMarkup(
    createElement(
      InquiryEmail,
      {
        language,
        firstName,
        lastName,
        email,
        interests,
        comment
      }
    )
  );
};

module.exports.getConfirmationMessage = ({ language, name, interests, comment }) => {
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

module.exports.getConfirmationMessageSubject = ({ language }) => {
  return renderToStaticMarkup(
    createElement(
      ConfirmationEmailSubject,
      {
        locale: language
      }
    )
  );
};
