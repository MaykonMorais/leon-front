import { Dispatch } from 'redux'

import { signup, signin } from '@services/auth'

export function createUser(email: string, password: string) {
	return async (dispatch: Dispatch) => {
		const data = await signup(email, password)

		console.warn(data)

		dispatch({ type: 'SET_USER' })
	}
}

export function login(email: string, password: string) {
	return async (dispatch: Dispatch) => {
		const data = await signin(email, password)
	}
}
