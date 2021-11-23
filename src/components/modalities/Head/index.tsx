import {} from '@actions/modalities'

import {
	Container,
	ModalityAreaText,
	Title,
	Description,
	SearchArea,
	Search,
} from './styles'

export default function Head() {
	const searchModality = () => {}

	return (
		<Container>
			<ModalityAreaText>
				<Title>Modalidades</Title>
				<Description>Conheça nossas modalidades disponíveis 😉</Description>
			</ModalityAreaText>
			<SearchArea>
				<Search
					onKeyDown={e => {
						if (e.code === 'Enter') {
							searchModality()
						}
					}}
					placeholder='Ioga, judô, ect.'
				/>
			</SearchArea>
		</Container>
	)
}
