import Link from 'next/link'

import { useSelector } from 'react-redux'

import {
	Container,
	LeftContent,
	Logo,
	RightContent,
	Item,
	SignInButton,
	MiddleContent,
	ProfilePicture,
} from './styles'
import { IRootState } from '@src/types'

export default function Header() {
	const { authenticated } = useSelector((state: IRootState) => state.user)

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
				{authenticated ? (
					<Link href='/profile' passHref>
						<ProfilePicture src='https://i.imgur.com/QdLOFBP.jpg' />
					</Link>
				) : (
					<Link href='/login' passHref>
						<SignInButton>Entrar</SignInButton>
					</Link>
				)}
			</RightContent>
		</Container>
	)
}
