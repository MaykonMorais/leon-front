import api from './api'
import { config } from '@utils/config'

const { modalities } = config.endpoints

export async function getModalitiesData() {
	return await api.get(modalities).then(response => response.data)
}
