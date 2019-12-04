import React from 'react';
import PropTypes from 'prop-types';
import { supportedLocales, supportedLocaleEnglishNames } from '@@i18n/supported-locales';

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

export const InquiryEmail = ({
  firstName,
  lastName,
  email,
  language,
  interests,
  comment
}) => {
  return (
    <html>
      <body>
        The following message was submitted via the 2020 Census Get Involved Form:
        <blockquote>
          Name:
          <p>
            {firstName} {lastName}
          </p>
          Email:
          <p>
            <a href={`mailto:${email}`}>{email}</a>
          </p>

          Language:
          <p>
            {supportedLocaleEnglishNames[language] || language}
          </p>

          Visitor has an interest in:
          <p>
            <ul>
              {interests.map(
                (interest) => (
                  <li key={interest}>
                    {interest}
                  </li>
                )
              )}
            </ul>
          </p>
          {
            comment ? (
              <React.Fragment>
                Additional comments:
                <p>
                  {comment}
                </p>
              </React.Fragment>
            ) : null
          }
        </blockquote>

        <p>
          The visitor is expecting a response within two business days. The response was sent at {formatDate(new Date())}. Reply back to this email to respond to the visitor.
        </p>
      </body>
    </html>
  );
};

InquiryEmail.propTypes = {
  language: PropTypes.oneOf(supportedLocales).isRequired,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string.isRequired,
  interests: PropTypes.arrayOf(PropTypes.string).isRequired,
  comment: PropTypes.string
};
