import {
	Container,
	ImageDetail,
	LeftContent,
	RightContent,
	Title,
	Description,
} from './styles'

export default function ModalityDetail() {
	return (
		<Container>
			<LeftContent>
				<ImageDetail src='/modalidade_example_2x.png' />
			</LeftContent>

			<RightContent>
				<Title>Modalidade Genérica</Title>
				<Description>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra
					sollicitudin diam, ac fringilla leo pretium vitae. Donec congue ligula
					non elit hendrerit rhoncus eget ut ligula. Sed convallis suscipit
					sapien, ac vestibulum nulla.
				</Description>
			</RightContent>
		</Container>
	)
}
