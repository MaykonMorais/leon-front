import { parseCookies } from 'nookies'
import { config } from '@src/utils/config'

import { IAction, IUser } from '@types'

const { [`${config.storageUserToken}`]: token } = parseCookies()
const { [`${config.storageUser}`]: userType } = parseCookies()

const initialState = {
	status: null,
	authenticated: !!token,
	userType: userType,
	loggedUser: null,
}

interface IUserAction extends IAction {
	type: string
	payload: {
		status: string
		authStatus: boolean
		userType: string
		loggedUser: IUser
	}
}

const userReducer = (state = initialState, action: IUserAction) => {
	switch (action.type) {
		case 'SET_STATUS':
			return {
				...state,
				status: action.payload.status,
				userType: action.payload.userType,
				...(action.payload.status === 'success' && { authenticated: true }),
			}

		case 'SET_AUTH_STATUS': {
			return {
				...state,
				authenticated: action.payload.authStatus,
			}
		}

		case 'SET_USER': {
			return {
				...state,
				loggedUser: action.payload.loggedUser,
			}
		}
		default:
			return { ...state }
	}
}

export default userReducer
