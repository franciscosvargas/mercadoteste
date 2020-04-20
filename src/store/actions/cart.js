  
export const addToCart = ({id, name, price, url, type }) => ({
    type: 'ADD_TO_CART',
    payload: {
		id,
		name, 
		price, 
		img: url,
		qnt: 1,
		type
	}
})

export const removeFromCart = ({id}, qnt) => ({
    type: 'REMOVE_FROM_CART',
    payload: {
		id,
		qnt

	}
})

export const clearCart = () => ({
	type: 'CLEAR_CART'
})

export const popupStatus = ({name, information}) => ({
    type: 'POPUP_STATUS',
    payload: {
		name,
		information
	}
})

export const logout = () => ({
    type: 'LOGOUT',
    payload: {}
})