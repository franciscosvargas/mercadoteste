export const loginSuccess = ({user, token}) => ({
    type: 'LOGIN_SUCCESS',
    payload: {
		name: user.name,
		id: user.id,
		token: token

	}
})

export const popupStatus = ({name, information}) => ({
    type: 'POPUP_STATUS',
    payload: {
		name,
		information
	}
})