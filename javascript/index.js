import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import areIntlLocalesSupported from 'intl-locales-supported';

import {
	InternationalizationWrapper,
} from './components/InternationalizationWrapper';
import MainContainer from './components/MainContainer';
import supportedLocales from '../i18n/supported-locales';

// We import the SASS/CSS file here
import '../styles/app.scss';

const render = () => {
	// This is where we can insert routing logic
	ReactDOM.render(
		(
			<InternationalizationWrapper>
				<BrowserRouter>
					<Switch>
						<Route path='/' component={ MainContainer }/>
					</Switch>
				</BrowserRouter>
			</InternationalizationWrapper>
		),
		document.getElementById('app-container')
	);
};

async function initialize() {	
	if (global.Intl) {
		// Determine if the built-in `Intl` has the locale data we need.
		if (!areIntlLocalesSupported(supportedLocales)) {
			// `Intl` exists, but it doesn't have the data we need, so load the
			// polyfill and replace the constructors with need with the polyfill's.
			const IntlPolyfill = await import('intl');
			Intl.NumberFormat = IntlPolyfill.NumberFormat;
			Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
		}
	}
	else {
		// No `Intl`, so use and load the polyfill.
		global.Intl = await import('intl');
	}
}

initialize().then(
	render
);
