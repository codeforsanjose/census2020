import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import areIntlLocalesSupported from 'intl-locales-supported';

import {
  InternationalizationWrapper
} from './components/InternationalizationWrapper';
import MainContainer from './components/MainContainer';
import Contact from './components/Contact';
import supportedLocales from '../i18n/supported-locales';

// We import the SASS/CSS file here
import '../styles/app.scss';

const render = () => {
  // This is where we can insert routing logic
  ReactDOM.render(
    (
      <InternationalizationWrapper>
        <BrowserRouter>
          <Link to="/">
            <FormattedMessage
              id="navigation.links.home"
              defaultMessage="Home"
              description="'Home' link in the navigation bar"
            />
          </Link>
          <br/>
          <Link to="/contact">
            <FormattedMessage
              id="navigation.links.contact"
              defaultMessage="Contact"
              description="'Contact' link in the navigation bar"
            />
          </Link>
          <Switch>
            <Route exact path='/' component={ MainContainer }/>
            <Route path='/contact' component={ Contact }/>
          </Switch>
        </BrowserRouter>
      </InternationalizationWrapper>
    ),
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
