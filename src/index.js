import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Pages/Home';

import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import  Store  from './store';

import Routes from './routes'

ReactDOM.render(
	<Provider store={Store}>
		<Routes />
	</Provider>,
  document.getElementById('root')
);

serviceWorker.register();
