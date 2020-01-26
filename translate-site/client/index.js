import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Modal from 'react-modal';
import { App } from './components/App';

import { supportedLocales } from '../../i18n/supported-locales';

const WrappedApp = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

const render = () => {
  const rootElement = document.getElementById('app-container');
  // This is where we can insert routing logic
  ReactDOM.render(
    (<WrappedApp />),
    rootElement
  );
  Modal.setAppElement(rootElement);
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
