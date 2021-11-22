import { GetServerSideProps } from 'next'

import { config } from '@src/utils/config'
import { parseCookies } from 'nookies'

import LoginBox from '@src/components/login/LoginBox'

const Login = () => {
	return (
		<>
			<LoginBox />
		</>
	)
}

export const getServerSideProps: GetServerSideProps = async ctx => {
	const { [`${config.storageUserToken}`]: token } = parseCookies(ctx)
	const { [`${config.storageUser}`]: userType } = parseCookies(ctx)

	if (token) {
		const destination = userType === 'ROLE_ADMIN' ? '/admin-home' : '/schedule'

		return {
			redirect: {
				destination,
				permanent: false,
			},
		}
	}

	return {
		props: {},
	}
}

export default Login
