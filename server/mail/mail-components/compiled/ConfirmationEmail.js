'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.ConfirmationEmail = void 0;

var _react = _interopRequireDefault(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _reactIntl = require('react-intl');

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const path = require('path');

const i18nDir = path.join(__dirname, '../../../../i18n');

const {
  supportedLocales
} = require(path.join(i18nDir, '/supported-locales'));

const interestMessageIds = {
  volunteer: 'components.Contact.fields.interest.options.volunteer',
  presentation: 'components.Contact.fields.interest.options.requestPresentation',
  information: 'components.Contact.fields.interest.options.information',
  other: 'components.Contact.fields.interest.options.other'
};
const messages = {};
supportedLocales.forEach(locale => {
  // Note that the path here is actually one more level above the relative path from this
  // file; this is because this gets compiled to one directory deeper, and Babel doesn't
  // seem to be able to properly transform dynamic imports like this--it just passes the
  // module path through unchanged.
  const translations = require(path.join(i18nDir, 'translations/translations.' + locale + '.json'));

  messages[locale] = Object.keys(translations).reduce((messageMap, messageId) => {
    messageMap[messageId] = translations[messageId].translation;
    return messageMap;
  }, {});
});

class ConfirmationEmail extends _react.default.Component {
  render () {
    return _react.default.createElement('html', null, _react.default.createElement('body', null, _react.default.createElement(_reactIntl.IntlProvider, {
      locale: this.props.locale,
      messages: messages[this.props.locale]
    }, _react.default.createElement(_reactIntl.FormattedMessage, {
      id: 'email.messages.confirmation.greeting',
      defaultMessage: 'Hi {name}',
      values: {
        name: this.props.name
      }
    }), _react.default.createElement('p', null, _react.default.createElement(_reactIntl.FormattedMessage, {
      id: 'email.messages.confirmation.thankYou',
      defaultMessage: 'Thank you for your interest in the 2020 Census effort in San Jose.'
    })), _react.default.createElement('p', null, _react.default.createElement(_reactIntl.FormattedMessage, {
      id: 'email.messages.confirmation.usersMessageIntro',
      defaultMessage: 'The following message was sent by you to the City of San Jose Census Office:'
    })), _react.default.createElement('blockquote', null, _react.default.createElement('h3', null, _react.default.createElement(_reactIntl.FormattedMessage, {
      id: 'email.messages.confirmation.interestsHeader',
      defaultMessage: 'I have an interest in:'
    })), _react.default.createElement('p', null, _react.default.createElement('ul', null, this.props.interests.map(interest => _react.default.createElement('li', {
      key: interest
    }, _react.default.createElement(_reactIntl.FormattedMessage, {
      id: interestMessageIds[interest]
    }))))), this.props.comment ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement('h3', null, _react.default.createElement(_reactIntl.FormattedMessage, {
      id: 'email.messages.confirmation.commentsHeader',
      defaultMessage: 'Additional comments:'
    })), _react.default.createElement('p', null, this.props.comment)) : null), _react.default.createElement('p', null, _react.default.createElement(_reactIntl.FormattedMessage, {
      id: 'email.messages.confirmation.conclusion',
      defaultMessage: 'Thank you again for your interest. Someone will respond back to you within two business days.'
    })), '\u2014', _react.default.createElement(_reactIntl.FormattedMessage, {
      id: 'email.messages.confirmation.signature',
      defaultMessage: 'City of San Jose 2020 Census Office'
    }))));
  }
}

exports.ConfirmationEmail = ConfirmationEmail;
ConfirmationEmail.propTypes = {
  locale: _propTypes.default.oneOf(supportedLocales).isRequired,
  interests: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,
  name: _propTypes.default.string,
  comment: _propTypes.default.string
};
