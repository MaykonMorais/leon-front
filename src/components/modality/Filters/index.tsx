import { useMemo, useState } from 'react'
import DropdownInput from '@components/common/DropdownInput'
import { IRootState } from '@src/types'

import { useSelector, useDispatch } from 'react-redux'
import { getModalityClasses } from '@actions/modalities'

import { Container, InputArea, Title, Row } from './styles'

interface FilterProps {
	id?: number
}

export default function Filters({ id }: FilterProps) {
	const dispatch = useDispatch()
	const [selectedTeacher, setSelectedTeacher] = useState(undefined)
	const [selectedGym, setSelectedGym] = useState(undefined)

	const { resultSearch, data } = useSelector(
		(state: IRootState) => state.modalities
	)

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

	const searchClasses = (teacherId?: number, gym?: number) => {
		dispatch(getModalityClasses(id, selectedTeacher, selectedGym))
	}

	return (
		<Container>
			<Row>
				<InputArea>
					<Title>Professores</Title>
					<DropdownInput
						options={teachers}
						placeholder='Selecione um Professor'
						onChange={({ value }) => {
							setSelectedTeacher(value)
							searchClasses(value)
						}}
					/>
				</InputArea>

				<InputArea>
					<Title>Academias</Title>
					<DropdownInput
						options={gyms}
						placeholder='Selecione uma academia'
						onChange={({ value }) => {
							setSelectedGym(value)
							searchClasses(undefined, value)
						}}
					/>
				</InputArea>
			</Row>
		</Container>
	)
}
