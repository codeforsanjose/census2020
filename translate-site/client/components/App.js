import React from 'react';
import classnames from 'classnames';
import { ToastContainer } from 'react-toastify';
import { TranslationList } from './TranslationList';
import { AuthenticationScreen } from './AuthenticationScreen';

import { supportedLocales, supportedLocaleEnglishNames } from '../../../i18n/supported-locales';
import './App.scss';

const params = new URLSearchParams(document.location.search);
if (params.has('access_token')) {
  const accessToken = params.get('access_token');
  localStorage.setItem('GITHUB_TOKEN', accessToken);
  const url = new URL(document.location);
  url.searchParams.delete('access_token');
  document.location.assign(url);
}

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
      {
        !localStorage.getItem('GITHUB_TOKEN') ? (
          <AuthenticationScreen/>
        ) : (
          <React.Fragment>
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
          </React.Fragment>
        )
      }
      <ToastContainer />
    </main>
  );
};

export { App };
