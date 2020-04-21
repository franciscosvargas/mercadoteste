export const refreshProductList = (list) => ({
    type: 'REFRESH_PRODUCT_LIST',
    payload: {
		list
	}
})

export const refreshCategoryList = (list) => ({
    type: 'REFRESH_CATEGORIES_LIST',
    payload: {
		list
	}
})

export const setUserName = (name) => ({
    type: 'SET_USERNAME',
    payload: {
		name
	}
})

export const menuStatus = () => ({
    type: 'MENU_STATUS',

})

  
export const popupStatus = ({name, information}) => ({
    type: 'POPUP_STATUS',
    payload: {
		name,
		information
	}
})