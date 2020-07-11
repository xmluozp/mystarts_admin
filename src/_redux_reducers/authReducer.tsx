import { AUTH as CONST } from "_redux_constants"

// let user
// try {
// 	user = JSON.parse(localStorage.getItem("mrsuser") || "")
// } catch (error) {
// 	user = {}
// }
// const defaultState = user ? { loggingIn: false, loggedIn: true, user } : {}

export default (state = {}, action: any) => {
	switch (action.type) {
		case CONST.LOGIN: // waiting while logging
			return {
				...state,
				loggingIn: true,
				loggedIn: false,
				message: action.message,
			}
		case CONST.LOGIN_SUCCESS: // login finish
			return {
				...state,
				loggingIn: false,
				loggedIn: true,
				message: action.message,
				userAuth: action.payload,
			}
		case CONST.LOGIN_FAILURE:
			return {
				...state,
				loggingIn: false,
				loggedIn: false,
				message: action.message,
				userAuth: null,
			}
		case CONST.LOGOUT:
			return { ...state, loggingIn: false, loggedIn: false, userAuth: null }
		default:
			return state
	}
}
