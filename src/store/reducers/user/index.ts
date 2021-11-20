import { parseCookies } from 'nookies'
import { config } from '@src/utils/config'

import { IAction } from '@types'

const { [`${config.storageUserToken}`]: token } = parseCookies()

const initialState = {
	status: null,
	authenticated: !!token,
}

interface IUserAction extends IAction {
	type: string
	payload: {
		status: string
		authStatus: boolean
	}
}

const userReducer = (state = initialState, action: IUserAction) => {
	switch (action.type) {
		case 'SET_STATUS':
			return {
				...state,
				status: action.payload.status,
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
