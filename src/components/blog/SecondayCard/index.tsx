import { Card, CardImg, Title, Description } from './styles'

export default function SecondaryCard() {
	return (
		<Card>
			<CardImg src='modalidade_example.png' />

			<Title>Lorem Ipsum</Title>
			<Description>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tellus
				sem, tempus dictum rutrum...
			</Description>
		</Card>
	)
}
