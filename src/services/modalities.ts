import api from './api'
import { config } from '@utils/config'

const { modalities } = config.endpoints

export async function getModalitiesData() {
	return await api.get(modalities).then(response => response.data)
}

export async function searchModalityByName(name: string) {
	return await api
		.get(`${modalities}/search?name=${name}`)
		.then(response => response.data)
}
