import React from 'react';
import classnames from 'classnames';
import { TranslationList } from './TranslationList';

import { supportedLocales, supportedLocaleEnglishNames } from '../../../i18n/supported-locales';
import './App.scss';

const App = () => {
  const [currentLocale, setLocale] = React.useState('en');
  const [searchTerm, setSearchTerm] = React.useState('');
  const localeButtonClass = 'c_app__locale-button';
  const handleSearchChange = React.useCallback((event) => {
    const searchString = event.target.value;
    setSearchTerm(searchString);
  });

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
      <input
        type="search"
        placeholder="Search messages by ID"
        defaultValue={searchTerm}
        onInput={handleSearchChange}
      />

      <TranslationList
        currentLocale={currentLocale}
        filterString={searchTerm}
      />
    </main>
  );
};

export { App };
