import DropdownInput from '@components/common/DropdownInput'

import { Container, InputArea, Title, Row } from './styles'

export default function Filters() {
	return (
		<Container>
			<Row>
				<InputArea>
					<Title>Professores</Title>
					<DropdownInput placeholder='Selecione um Professor' />
				</InputArea>

				<InputArea>
					<Title>Academias</Title>
					<DropdownInput placeholder='Selecione uma academia' />
				</InputArea>
			</Row>
		</Container>
	)
}
