import api from './api'
import { config } from '@utils/config'

const { schedules } = config.endpoints

export async function getSchedules() {
	return await api.get(schedules).then(response => response.data)
}
