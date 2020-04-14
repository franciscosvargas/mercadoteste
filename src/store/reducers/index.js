import { combineReducers } from 'redux';

import login from './login';
import popup from './popup';
import products from './products';
import cart from './cart';

export default combineReducers({
    login,
	popup, 
	products,
	cart
});