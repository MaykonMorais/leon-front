import { IRootState } from '@src/types'
import { useSelector } from 'react-redux'
import ClassCard from '../ClassCard'
import { Container, Body, Title } from './styles'

export default function AvaliableClasses() {
	const { searchedClasses } = useSelector(
		(state: IRootState) => state.modalities
	)

	return (
		<Container>
			<Title>Turmas Disponíveis</Title>

			<Body>
				{searchedClasses.length > 0 && (
					<>
						{searchedClasses.map((searchedClass, index) => {
							return <ClassCard key={index} data={searchedClass} />
						})}
					</>
				)}
			</Body>
		</Container>
	)
}
