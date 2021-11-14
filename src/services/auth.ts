import api from './api'
import { config } from '@utils/config'

const { users } = config.endpoints

export async function signup(email: string, password: string) {
	return await api
		.post(users, { email, password })
		.then(response => response.data)
}
