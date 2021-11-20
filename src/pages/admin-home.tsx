import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'

import { config } from '@utils/config'

import Header from '@components/admin/Header'
import BodyContainer from '@components/common/BodyContainer'
import MenuAdmin from '@components/admin/MenuAdmin'

const AdminHome = () => {
	return (
		<>
			<Header />
			<BodyContainer>
				<MenuAdmin />
			</BodyContainer>
		</>
	)
}

export const getServerSideProps: GetServerSideProps = async ctx => {
	const { [`${config.storageUserToken}`]: token } = parseCookies(ctx)

	if (!token) {
		return {
			redirect: {
				destination: '/login',
				permanent: false,
			},
		}
	}

	return {
		props: {},
	}
}

export default AdminHome
