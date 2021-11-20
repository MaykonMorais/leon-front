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

	if (token) {
		return {
			redirect: {
				destination: '/admin-home',
				permanent: false,
			},
		}
	}

	return {
		props: {},
	}
}

export default Login
