import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainContainer from './components/MainContainer';

// We import the SASS/CSS file here
import '../styles/app.scss';

// This is where we can insert routing logic
ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path='/' component={ MainContainer }/>
		</Switch>
	</BrowserRouter>,
	document.getElementById('app-container')
);
