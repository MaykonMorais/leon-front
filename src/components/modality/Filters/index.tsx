import { useMemo } from 'react'
import DropdownInput from '@components/common/DropdownInput'
import { IRootState } from '@src/types'

import { useSelector } from 'react-redux'

import { Container, InputArea, Title, Row } from './styles'

export default function Filters() {
	const { data } = useSelector((state: IRootState) => state.teachers)

	const teachers = useMemo(
		() =>
			data.map(teacher => ({
				label: teacher.name,
				value: teacher.id,
			})),
		[data]
	)

	return (
		<Container>
			<Row>
				<InputArea>
					<Title>Professores</Title>
					<DropdownInput
						options={teachers}
						placeholder='Selecione um Professor'
					/>
				</InputArea>

				<InputArea>
					<Title>Academias</Title>
					<DropdownInput placeholder='Selecione uma academia' />
				</InputArea>
			</Row>
		</Container>
	)
}
