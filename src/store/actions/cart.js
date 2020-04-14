  
export const addToCart = ({id, name, price, url }) => ({
    type: 'ADD_TO_CART',
    payload: {
		id,
		name, 
		price, 
		img: url,
		qnt: 1
	}
})

export const removeFromCart = ({id}, qnt) => ({
    type: 'REMOVE_FROM_CART',
    payload: {
		id,
		qnt

	}
})