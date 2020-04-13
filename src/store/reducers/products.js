const INITIAL_STATE = {
	products: [],
	categories: []
};

// Reducer
export default function login(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'REFRESH_PRODUCT_LIST':
            return { ...state, products: [...action.payload.list] };
			break;
		
		case 'REFRESH_CATEGORIES_LIST':
			return { ...state, categories: ['Todos os produtos', ...action.payload.list]};
			break;
        default:
            return state;
    }
}