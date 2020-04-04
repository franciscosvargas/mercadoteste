/* eslint-disable no-unreachable */
const INITIAL_STATE = {
	open: true,
	name: 'login',
	info: {
		text: 'aaaa'
	}
};

// Reducer
export default function login(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'POPUP_STATUS':
            return { ...state, open: !state.open, info: action.payload.info };
            break;
        default:
            return state;
    }
}