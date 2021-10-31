import Logo from '@assets/Logo.png'
import Image from 'next/image'

import { Container, Left, Middle, Right } from './styles'

const Navbar = () => {
	return (
		<Container>
			<Left>
				<span>Home</span>
				<span>Blog</span>
				<span>Horarios</span>
				<span>Preços</span>
			</Left>

			<Middle>
				<Image src={Logo} alt='' />
			</Middle>

			<Right>
				<button className='btEntrar'>Entrar</button>
			</Right>
		</Container>
	)
}

export default Navbar
