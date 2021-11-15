import Logo from '@assets/Logo.png'
import Image from 'next/image'
import Link from 'next/link'

import { Container, Left, Middle, Right } from './styles'

const NavbarHome = () => {
	return (
		<Container>
			<Left></Left>

			<Middle>
				<Image src={Logo} alt='' />
			</Middle>
			<Link passHref href='/'>
				<Right>
					<img
						style={{
							width: 61,
							height: 61,
							marginRight: 30,
							boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
							borderRadius: 9999,
							borderStyle: 'solid',
							borderWidth: 1,
							borderStyle: 'solid',
							borderColor: 'white',
						}}
						src='https://via.placeholder.com/61x61'
					/>
				</Right>
			</Link>
		</Container>
	)
}

export default NavbarHome
