import { toast } from 'react-toastify'
import { config as defaultConfigs } from '@utils/config'
import { parseCookies } from 'nookies'
import axios from 'axios'

export const baseURL = defaultConfigs.API_URL

const axiosConfig = axios.create({
	baseURL: baseURL,
})

axiosConfig.interceptors.request.use(
	config => {
		const { [`${defaultConfigs.storageUserToken}`]: token } = parseCookies()

		if (token) {
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			config.headers!.Authorization = `${defaultConfigs.tokenType} ${token}`
		}

		return config
	},
	error => Promise.reject(error)
)

axiosConfig.interceptors.response.use(
	response => {
		return response
	},
	error => {
		if (error.response.status === 403) {
			const notify = () => toast.error('Ops! Usuário ou senha incorretos')

			notify()
		}

		return Promise.reject(error)
	}
)

export default axiosConfig
