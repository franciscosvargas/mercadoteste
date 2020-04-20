/* eslint-disable no-unreachable */
const INITIAL_STATE = {
    user: {},
    token: null, 
};

// Reducer
export default function login(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return { ...state, user: action.payload.user, token: action.payload.token  };
            break;
        case 'LOGOUT':
			return  { user: {}, token: null }
			break;
		case 'UPDATE_USER':
			return { ...state, user: action.payload.user}
			break;
        default:
            return state;
    }
}