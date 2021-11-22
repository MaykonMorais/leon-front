import axios, { AxiosError } from 'axios'
import { toast } from 'react-toastify'

import { Dispatch } from 'redux'
import { setCookie } from 'nookies'

import jwtDecode from 'jwt-decode'
import { IToken } from '@types'

import { config } from '@utils/config'
import { signup, signin } from '@services/auth'

export function createUser(email: string, password: string) {
	return async (dispatch: Dispatch) => {
		try {
			await signup(email, password)

			const notify = () => toast.success('Usuário cadastrado com sucesso!')
			notify()

			dispatch({ type: 'SET_STATUS', payload: { status: 'registered' } })
		} catch (error) {
			if (axios.isAxiosError(error)) {
				if (error.response?.status === 409) {
					const notify = () => toast.error('Email já está sendo usado')
					notify()
				}
			}

			dispatch({ type: 'SET_STATUS', payload: { status: 'fail' } })
		}

		dispatch({ type: 'SET_STATUS', payload: { status: null } })
	}
}

export function login(email: string, password: string) {
	const { storageUserToken, storageUser } = config

	return async (dispatch: Dispatch) => {
		try {
			// eslint-disable-next-line camelcase
			const { access_token } = await signin(email, password)
			const { exp, roles } = jwtDecode<IToken>(access_token)

			setCookie(undefined, storageUserToken, access_token, {
				maxAge: 60 * 60 * 1,
			})

			setCookie(undefined, storageUser, roles[0], { maxAge: 60 * 60 * 1 })

			dispatch({
				type: 'SET_STATUS',
				payload: { status: 'success', userType: roles[0] },
			})

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
