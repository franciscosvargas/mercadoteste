const INITIAL_STATE = {
	open: true,
	name: 'notify'
};

// Reducer
export default function login(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'POPUP_STATUS':
            return { ...state, open: !state.open };
            break;
        default:
            return state;
    }
}