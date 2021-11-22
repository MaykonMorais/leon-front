import api from './api'
import { config } from '@utils/config'

const { gyms } = config.endpoints

export async function getGymsData() {
	return await api.get(gyms).then(response => response.data)
}
