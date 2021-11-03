import RangeInput from '../RangeInput'

import { Container, InputArea, Title } from './styles'

export default function Filters() {
	return (
		<Container>
			<InputArea>
				<Title>Preço</Title>
				<RangeInput />
			</InputArea>
		</Container>
	)
}
