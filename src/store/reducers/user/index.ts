import { parseCookies } from 'nookies'
import { config } from '@src/utils/config'

import { IAction } from '@types'

const { [`${config.storageUserToken}`]: token } = parseCookies()
const { [`${config.storageUser}`]: userType } = parseCookies()

const initialState = {
	status: null,
	authenticated: !!token,
	userType: userType,
}

interface IUserAction extends IAction {
	type: string
	payload: {
		status: string
		authStatus: boolean
		userType: string
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
		default:
			return { ...state }
	}
}

export default userReducer
