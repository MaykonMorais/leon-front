import api from './api'
import { config } from '@utils/config'

const { teachers } = config.endpoints

export async function getTeachersData() {
	return await api.get(teachers).then(response => response.data)
}
