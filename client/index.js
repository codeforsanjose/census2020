import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { addLocaleData } from 'react-intl';
import areIntlLocalesSupported from 'intl-locales-supported';
// We import the SASS/CSS file here
import '../styles/app.scss';

import App from './components/App';
import LocaleContext from './components/LocaleContext';
import { supportedLocales } from '../i18n/supported-locales';

for (const locale of supportedLocales) {
  const localeData = require(`react-intl/locale-data/${locale}`);
  addLocaleData(localeData);
}

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

const render = () => {
  // This is where we can insert routing logic
  ReactDOM.render(
    (<WrappedApp />),
    document.getElementById('app-container')
  );
};

async function initialize () {
  if (global.Intl) {
    // Determine if the built-in `Intl` has the locale data we need.
    if (!areIntlLocalesSupported(supportedLocales)) {
      // `Intl` exists, but it doesn't have the data we need, so load the
      // polyfill and replace the constructors with need with the polyfill's.
      const IntlPolyfill = await import('intl');
      Intl.NumberFormat = IntlPolyfill.NumberFormat;
      Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
    }
  } else {
    // No `Intl`, so use and load the polyfill.
    global.Intl = await import('intl');
  }
}

initialize().then(
  render
);
