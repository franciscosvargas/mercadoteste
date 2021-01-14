const INITIAL_STATE = [];

// Reducer
export default function login(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
			try {
				state.find(product => product.id === action.payload.id).qnt++
			} catch (error) {
				state.push(action.payload)
			}

			return [...state]

		case 'REMOVE_FROM_CART':
			if(action.payload.qnt > 1) {
				state.find(product => product.id === action.payload.id).qnt--
				return [...state]
			} else {
				const newState = state.filter(product => product.id !== action.payload.id)
				return [...newState]
			}

		case 'CLEAR_CART':
			return [];
		
		default:
				return state;
    }
}