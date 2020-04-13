  
export const popupStatus = ({name, information}) => ({
    type: 'POPUP_STATUS',
    payload: {
		name,
		information
	}
})

export const menuStatus = () => ({
    type: 'MENU_STATUS',

})