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
				<Description>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</Description>
			</ModalityAreaText>
			<SearchArea>
				<Search placeholder='Ioga, judô, ect.' />
			</SearchArea>
		</Container>
	)
}
