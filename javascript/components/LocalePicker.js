import React from 'react';
import PropTypes from 'prop-types';

import supportedLocales from '../../i18n/supported-locales';

const LOCALE_DISPLAY_NAMES = {
  en: 'English',
  es: 'Español',
  vi: 'Tiếng Việt'
};

export const LocalePicker = ({ currentLocale, onLocaleClicked }) => {
  return (
    <ul className="c2020__locale-picker__list">
      {
        supportedLocales.map(
          (locale) => (
            <li key={locale}>
              <button
                className="usa-button"
                disabled={locale === currentLocale}
                onClick={() => onLocaleClicked(locale)}
              >
                {LOCALE_DISPLAY_NAMES[locale]}
              </button>
            </li>
          )
        )
      }
    </ul>
  );
};

LocalePicker.propTypes = {
  currentLocale: PropTypes.oneOf(supportedLocales).isRequired,
  onLocaleClicked: PropTypes.func.isRequired
};
