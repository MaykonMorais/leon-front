import { Dispatch } from 'redux'

import { signup } from '@services/auth'

export function createUser(email: string, password: string) {
	return async (dispatch: Dispatch) => {
		const data = await signup(email, password)

		console.warn('data', data)
	}
}
