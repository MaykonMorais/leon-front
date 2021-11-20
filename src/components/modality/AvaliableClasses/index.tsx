import ClassCard from '../ClassCard'
import { Container, Body, Title } from './styles'

export default function AvaliableClasses() {
	return (
		<Container>
			<Title>Turmas Disponíveis</Title>

			<Body>
				<ClassCard />
				<ClassCard />
			</Body>
		</Container>
	)
}
