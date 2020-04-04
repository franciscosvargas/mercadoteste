const INITIAL_STATE = {
    userId: null, 
    name: null,
    token: null, 
    error: false
};

// Reducer
export default function login(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return { ...state, userId: action.payload.userId, name: action.payload.name, token: action.payload.token, error: false };
            break;
        case 'LOGIN_FAILURE':
            return { ...state, error: true}
            break;
        case 'LOGOUT':
            return { ...state }
        default:
            return state;
    }
}