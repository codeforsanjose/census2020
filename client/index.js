import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// We import the SASS/CSS file here
import '../styles/app.scss';

import App from './components/App';
import LocaleContext from './components/LocaleContext';
import { supportedLocales } from '../i18n/supported-locales';

class WrappedApp extends React.PureComponent {
  state = {
    currentLocale: 'en'
  }

  setLocale = (locale) => {
    this.setState({
      currentLocale: locale
    });
  }

  render () {
    return (
      <BrowserRouter>
        <LocaleContext.Provider
          value={{
            currentLocale: this.state.currentLocale,
            setLocale: this.setLocale
          }}
        >
          <App/>
        </LocaleContext.Provider>
      </BrowserRouter>
    );
  }
}

const handleTabbing = (e) => {
  if (e.keyCode === 9) { // user has started tabbing - add a class to body to alter :focus styles
    document.body.classList.add('user-is-tabbing');
    window.removeEventListener('keydown', handleTabbing);
  }
};

const resetTabbingFlag = (e) => {
  if (document.body.classList.contains('user-is-tabbing')) {
    document.body.classList.remove('user-is-tabbing');
    window.addEventListener('keydown', handleTabbing);
  }
};

const render = () => {
  window.addEventListener('keydown', handleTabbing);

  window.addEventListener('mousedown', resetTabbingFlag);
  // This is where we can insert routing logic

  ReactDOM.render(
    (<WrappedApp />),
    document.getElementById('app-container')
  );
};

async function initialize () {
  if (!global.Intl) {
    // No `Intl`, so use and load the polyfill.
    global.Intl = await import('intl');
  }

  if (!global.Intl.PluralRules) {
    await Promise.all([
      import('@formatjs/intl-pluralrules/polyfill'),
      ...supportedLocales.map(
        (locale) => import(`@formatjs/intl-pluralrules/dist/locale-data/${locale}`)
      )
    ]);
  }
  if (!global.Intl.RelativeTimeFormat) {
    await Promise.all([
      import('@formatjs/intl-relativetimeformat/polyfill'),
      ...supportedLocales.map(
        (locale) => import(`@formatjs/intl-relativetimeformat/dist/locale-data/${locale}`)
      )
    ]);
  }
}

initialize().then(
  render
);
