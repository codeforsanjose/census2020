import React from 'react';

import LocaleContext from './LocaleContext';
import supportedLocales from '../../i18n/supported-locales';

const LOCALE_DISPLAY_NAMES = {
  en: 'English',
  es: 'Español',
  vi: 'Tiếng Việt'
};

export const LocalePicker = () => {
  return (
    <LocaleContext.Consumer>
      {
        ({ currentLocale, setLocale }) => (
          <div className={'c_locale-picker'}>
            <select
              value={currentLocale}
              onChange={({ target }) => setLocale(target.value)}
            >
              {
                supportedLocales.map(
                  (locale) => (
                    <option
                      key={locale}
                      value={locale}
                    >
                      {LOCALE_DISPLAY_NAMES[locale]}
                    </option>
                  )
                )
              }
            </select>
          </div>
        )
      }
    </LocaleContext.Consumer>
  );
};
