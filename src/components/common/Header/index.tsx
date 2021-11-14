import Link from 'next/link'

import {
	Container,
	LeftContent,
	Logo,
	RightContent,
	Item,
	SignInButton,
	MiddleContent,
} from './styles'

export default function Header() {
	return (
		<Container>
			<LeftContent>
				<Link href='/' passHref>
					<Item>Home</Item>
				</Link>
				<Link href='/blog' passHref>
					<Item>Blog</Item>
				</Link>
				<Link href='/modalities' passHref>
					<Item>Modalidades</Item>
				</Link>
				<Link href='/schedule' passHref>
					<Item>Agenda</Item>
				</Link>
			</LeftContent>
			<MiddleContent>
				<Logo src='/Logo.png' />
			</MiddleContent>
			<RightContent>
				<SignInButton>Entrar</SignInButton>
			</RightContent>
		</Container>
	)
}
