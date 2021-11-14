import { config as defaultConfigs } from '@utils/config'
import axios from 'axios'

export const baseURL = defaultConfigs.API_URL

const axiosConfig = axios.create({
	baseURL,
})

axios.interceptors.request.use(
	config => {
		const userToken = localStorage.getItem(defaultConfigs.storageUserToken)

		if (userToken) {
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			config.headers!.Authorization = `${defaultConfigs.tokenType} ${userToken}`
		}

		return config
	},
	error => Promise.reject(error)
)

export default axiosConfig
