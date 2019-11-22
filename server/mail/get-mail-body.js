const { createElement } = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const { ConfirmationEmail, ConfirmationEmailSubject } = require('./mail-components/compiled/ConfirmationEmail');

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
