import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';

import './index.css';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import  { store, persistor }  from './store';

import Routes from './routes'

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<Routes />
		</PersistGate>
		
	</Provider>,
  document.getElementById('root')
);

//serviceWorker.unregister();
