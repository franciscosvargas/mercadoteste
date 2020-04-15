/* eslint-disable no-unreachable */
const INITIAL_STATE = {
	popup: {
		open: false,
		name: 'login',
		info: {}
	},
	menu: false
};
// Reducer
export default function login(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'POPUP_STATUS':
            return { ...state, popup: { open: !state.popup.open, info: action.payload.information, name: action.payload.name }};
			break;
			
		case 'MENU_STATUS':
			return { ...state, menu: !state.menu};
			break;
        default:
            return state;
    }
}