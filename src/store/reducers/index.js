import { combineReducers } from 'redux';

import login from './login';
import popup from './popup';

export default combineReducers({
    login,
    popup
});