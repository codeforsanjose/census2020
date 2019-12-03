import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { FormattedMarkdownMessage } from '@@client/components/FormattedMarkdownMessage';
import { messages } from '@@i18n/translations';
import { supportedLocales } from '@@i18n/supported-locales';

const interestMessageIds = {
  volunteer: 'components.Contact.fields.interest.options.volunteer',
  presentation: 'components.Contact.fields.interest.options.requestPresentation',
  information: 'components.Contact.fields.interest.options.information',
  other: 'components.Contact.fields.interest.options.other'
};

export class ConfirmationEmail extends React.Component {
  render () {
    return (
      <html>
        <body>
          <IntlProvider
            locale={this.props.locale}
            messages={messages[this.props.locale]}
          >
            <FormattedMarkdownMessage
              id="email.messages.confirmation.greeting"
              defaultMessage="Hi {name}"
              values={{
                name: this.props.name
              }}
            />
            <p>
              <FormattedMarkdownMessage
                id="email.messages.confirmation.thankYou"
                defaultMessage="Thank you for your interest in the 2020 Census effort in San Jose."
              />
            </p>
            <p>
              <FormattedMarkdownMessage
                id="email.messages.confirmation.usersMessageIntro"
                defaultMessage="The following message was sent by you to the City of San Jose Census Office:"
              />
            </p>
            <blockquote>
              <h3>
                <FormattedMarkdownMessage
                  id="email.messages.confirmation.interestsHeader"
                  defaultMessage="I have an interest in:"
                />
              </h3>
              <p>
                <ul>
                  {this.props.interests.map(
                    (interest) => (
                      <li key={interest}>
                        <FormattedMarkdownMessage
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
                        <FormattedMarkdownMessage
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
              <FormattedMarkdownMessage
                id="email.messages.confirmation.conclusion"
                defaultMessage="Thank you again for your interest. Someone will respond back to you within two business days."
              />
            </p>
            &mdash;
            <FormattedMarkdownMessage
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

export const ConfirmationEmailSubject = ({ locale }) => {
  return (
    <IntlProvider
      locale={locale}
      messages={messages[locale]}
    >
      {/* This should not be markdown-enabled because email subjects do not support formatting */}
      <FormattedMessage
        id="mail.messages.confirmation.subject"
        defaultMessage="Thank you for contacting the San Jose Census Department"
      />
    </IntlProvider>
  );
};

ConfirmationEmailSubject.propTypes = {
  locale: PropTypes.string.isRequired
};
