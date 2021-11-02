import { Container, LeftContent, Logo, RightContent, Item } from './styles'

export default function Header() {
	return (
		<Container>
			<LeftContent>
				<Item>Home</Item>
				<Item>Blog</Item>
				<Item>Modalidades</Item>
				<Item>Agenda</Item>
			</LeftContent>

			<RightContent>
				<Logo src='Logo.png' />
			</RightContent>
		</Container>
	)
}
