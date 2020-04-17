/* eslint-disable no-unreachable */
const INITIAL_STATE = {
    id: null, 
    name: null,
    token: null, 
};

// Reducer
export default function login(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return { ...state, id: action.payload.id, name: action.payload.name, token: action.payload.token };
            break;
        case 'LOGIN_FAILURE':
            return { ...state, error: true}
            break;
        case 'LOGOUT':
			return { ...state }

		case 'SET_USERNAME':
			return {
				...state, name: action.payload.name
			}
			
        default:
            return state;
    }
}