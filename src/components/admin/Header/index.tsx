import Link from 'next/link'

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

export default function Header() {
	return (
		<Container>
			<LeftContent></LeftContent>
			<MiddleContent>
				<Logo src='/Logo.png' />
			</MiddleContent>
			<RightContent>
				<Link href='/profile' passHref>
					<ProfilePicture src='https://i.imgur.com/QdLOFBP.jpg' />
				</Link>
			</RightContent>
		</Container>
	)
}
