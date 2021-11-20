import api from './api'
import { config } from '@utils/config'

const { users, auth } = config.endpoints

export async function signup(email: string, password: string) {
	return await api
		.post(users, { email, password })
		.then(response => response.data)
}

export async function signin(email: string, password: string) {
	return await api
		.post(auth, { email, password })
		.then(response => response.data)
}
