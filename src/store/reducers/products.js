const INITIAL_STATE = [];

// Reducer
export default function login(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'REFRESH_LIST':
            return [...action.payload.list];
            break;
        default:
            return state;
    }
}