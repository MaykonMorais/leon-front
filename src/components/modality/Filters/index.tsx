import RangeInput from '../RangeInput'

import {
	Container,
	InputArea,
	Title,
	LeftContent,
	TempDescription,
} from './styles'

export default function Filters() {
	return (
		<Container>
			<LeftContent>
				<InputArea>
					<Title>Preço</Title>
					<RangeInput />
				</InputArea>

				<InputArea>
					<Title>Data</Title>
					<TempDescription>De Hoje até 22 de Março</TempDescription>
				</InputArea>
			</LeftContent>
		</Container>
	)
}
