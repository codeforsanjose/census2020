import React from 'react';

import LocaleContext from './LocaleContext';
import {
  supportedLocales,
  supportedLocaleNames
} from '../../i18n/supported-locales';

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
                      {supportedLocaleNames[locale]}
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
