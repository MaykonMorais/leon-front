import {
	Container,
	ModalityAreaText,
	Title,
	Description,
	SearchArea,
	Search,
} from './styles'

export default function Head() {
	return (
		<Container>
			<ModalityAreaText>
				<Title>Modalidades</Title>
				<Description>Conheça nossas modalidades disponíveis 😉</Description>
			</ModalityAreaText>
			<SearchArea>
				<Search placeholder='Ioga, judô, ect.' />
			</SearchArea>
		</Container>
	)
}
