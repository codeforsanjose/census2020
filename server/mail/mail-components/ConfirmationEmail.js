import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider, FormattedMessage } from 'react-intl';

const path = require('path');
const i18nDir = path.join(__dirname, '../../../../i18n');
const { supportedLocales } = require(path.join(i18nDir, '/supported-locales'));

const interestMessageIds = {
  volunteer: 'components.Contact.fields.interest.options.volunteer',
  presentation: 'components.Contact.fields.interest.options.requestPresentation',
  information: 'components.Contact.fields.interest.options.information',
  other: 'components.Contact.fields.interest.options.other'
};

const messages = {};

supportedLocales.forEach(
  (locale) => {
    // Note that the path here is actually one more level above the relative path from this
    // file; this is because this gets compiled to one directory deeper, and Babel doesn't
    // seem to be able to properly transform dynamic imports like this--it just passes the
    // module path through unchanged.
    const translations = require(path.join(i18nDir, 'translations/translations.' + locale + '.json'));
    messages[locale] = Object.keys(translations).reduce(
      (messageMap, messageId) => {
        messageMap[messageId] = translations[messageId].translation;

        return messageMap;
      },
      {}
    );
  }
);

export class ConfirmationEmail extends React.Component {
  render () {
    return (
      <html>
        <body>
          <IntlProvider
            locale={this.props.locale}
            messages={messages[this.props.locale]}
          >
            <FormattedMessage
              id="email.messages.confirmation.greeting"
              defaultMessage="Hi {name}"
              values={{
                name: this.props.name
              }}
            />
            <p>
              <FormattedMessage
                id="email.messages.confirmation.thankYou"
                defaultMessage="Thank you for your interest in the 2020 Census effort in San Jose."
              />
            </p>
            <p>
              <FormattedMessage
                id="email.messages.confirmation.usersMessageIntro"
                defaultMessage="The following message was sent by you to the City of San Jose Census Office:"
              />
            </p>
            <blockquote>
              <h3>
                <FormattedMessage
                  id="email.messages.confirmation.interestsHeader"
                  defaultMessage="I have an interest in:"
                />
              </h3>
              <p>
                <ul>
                  {this.props.interests.map(
                    (interest) => (
                      <li key={interest}>
                        <FormattedMessage
                          id={interestMessageIds[interest]}
                        />
                      </li>
                    )
                  )}
                </ul>
              </p>
              {
                this.props.comment
                  ? (
                    <React.Fragment>
                      <h3>
                        <FormattedMessage
                          id="email.messages.confirmation.commentsHeader"
                          defaultMessage="Additional comments:"
                        />
                      </h3>
                      <p>
                        {this.props.comment}
                      </p>
                    </React.Fragment>
                  )
                  : null
              }
            </blockquote>
            <p>
              <FormattedMessage
                id="email.messages.confirmation.conclusion"
                defaultMessage="Thank you again for your interest. Someone will respond back to you within two business days."
              />
            </p>
            &mdash;
            <FormattedMessage
              id="email.messages.confirmation.signature"
              defaultMessage="City of San Jose 2020 Census Office"
            />
          </IntlProvider>
        </body>
      </html>
    );
  }
}

ConfirmationEmail.propTypes = {
  locale: PropTypes.oneOf(supportedLocales).isRequired,
  interests: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string,
  comment: PropTypes.string
};
