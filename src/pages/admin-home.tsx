import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'

import MenuAdmin from '@src/components/MenuAdmin/MenuAdmin'
import NavbarHome from '@src/components/NavbarHome/NavbarHome'
import { config } from '@src/utils/config'

const AdminHome = () => {
	return (
		<div className='login'>
			<NavbarHome />
			<MenuAdmin />
		</div>
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
