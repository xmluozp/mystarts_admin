import { AUTH as CONST } from "_redux_constants"

let user
try {
	user = JSON.parse(localStorage.getItem("mrsuser"))
} catch (error) {
	user = {}
}
const defaultState = user ? { loggingIn: false, loggedIn: true, user } : {}

export default (state = defaultState, action) => {
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
				user: action.payload,
			}
		case CONST.LOGIN_ERROR:
			return {
				...state,
				loggingIn: false,
				loggedIn: false,
				message: action.message,
				user: {},
			}
		case CONST.LOGOUT:
			return { ...state, loggingIn: false, loggedIn: false, user: null }
		case CONST.TEST:
			return { ...state, message: action.data }
		default:
			return state
	}
}
