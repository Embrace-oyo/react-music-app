import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import App from './app.js';
import './static/css/reset.styl';
// =====================================



ReactDOM.render((
		<BrowserRouter>
			<Route path="/" component={App}/>
		</BrowserRouter>
	),
	document.getElementById('root')
);
