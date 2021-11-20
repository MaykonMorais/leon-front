import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import jwtDecode from 'jwt-decode'

import { IRootState, IToken } from '@types'
import { config } from '@utils/config'

export default function useAuth() {
	const { authenticated } = useSelector((state: IRootState) => state.user)
	const router = useRouter()

	let userToken

	if (typeof window !== 'undefined') {
		userToken = localStorage.getItem(config.storageUserToken)
	}

	if (userToken) {
		// eslint-disable-next-line camelcase
		const { access_token } = JSON.parse(userToken)
		const { exp } = jwtDecode<IToken>(access_token)

		if (exp * 1000 < new Date().getTime() || !authenticated) {
			router.replace('/login')
		}
	} else if (!authenticated) {
		router.replace('/login')
	}

	return { authenticated }
}
