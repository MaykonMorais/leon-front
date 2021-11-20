import { Dispatch } from 'redux'
import { setCookie } from 'nookies'

import jwtDecode from 'jwt-decode'
import { IToken } from '@types'

import { config } from '@utils/config'
import { signup, signin } from '@services/auth'

export function createUser(email: string, password: string) {
	return async (dispatch: Dispatch) => {
		const data = await signup(email, password)

		console.warn(data)

		// dispatch({ type: 'SET_USER' })
	}
}

export function login(email: string, password: string) {
	const { storageUserToken } = config

	return async (dispatch: Dispatch) => {
		try {
			// eslint-disable-next-line camelcase
			const { access_token } = await signin(email, password)
			const { exp } = jwtDecode<IToken>(access_token)

			setCookie(undefined, storageUserToken, access_token, {
				maxAge: 60 * 60 * 1,
			})

			dispatch({ type: 'SET_STATUS', payload: { status: 'success' } })
			setAuth(true)
		} catch (error) {
			dispatch({ type: 'SET_STATUS', payload: { status: 'error' } })
		}
	}
}

export function setAuth(authStatus: boolean) {
	return async (dispath: Dispatch) => {
		dispath({ type: 'SET_AUTH_STATUS', payload: { authStatus } })
	}
}
