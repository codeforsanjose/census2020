import React from 'react';
import classnames from 'classnames';
import { TranslationList } from './TranslationList';

import { supportedLocales, supportedLocaleEnglishNames } from '../../../i18n/supported-locales';
import './App.scss';

const App = () => {
  const [currentLocale, setLocale] = React.useState('en');
  const localeButtonClass = 'c_app__locale-button';

  const clickHandlers = supportedLocales.reduce(
    (handlers, locale) => {
      handlers[locale] = React.useCallback(() => {
        setLocale(locale);
      });
      return handlers;
    }, {}
  );
  return (
    <main>
      <header>
        <h1>Census 2020 Translation Management</h1>
      </header>
      {
        supportedLocales.map(
          (locale) => (
            <button key={locale}
              onClick={clickHandlers[locale]}
              className={classnames(
                localeButtonClass,
                {
                  [`${localeButtonClass}--active`]: currentLocale === locale
                }
              )}
            >
              {supportedLocaleEnglishNames[locale]}
            </button>
          )
        )
      }

      <TranslationList
        currentLocale={currentLocale}
      />
    </main>
  );
};

export { App };
