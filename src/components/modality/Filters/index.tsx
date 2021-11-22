import { useMemo } from 'react'
import DropdownInput from '@components/common/DropdownInput'
import { IRootState } from '@src/types'

import { useSelector } from 'react-redux'

import { Container, InputArea, Title, Row } from './styles'

export default function Filters() {
	const { data: teacherData } = useSelector(
		(state: IRootState) => state.teachers
	)

	const { data: gymsData } = useSelector((state: IRootState) => state.gyms)

	const teachers = useMemo(
		() =>
			teacherData.map(teacher => ({
				label: teacher.name,
				value: teacher.id,
			})),
		[teacherData]
	)

	const gyms = useMemo(
		() =>
			gymsData.map(gym => ({
				label: gym.name,
				value: gym.id,
			})),
		[gymsData]
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
					<DropdownInput options={gyms} placeholder='Selecione uma academia' />
				</InputArea>
			</Row>
		</Container>
	)
}
