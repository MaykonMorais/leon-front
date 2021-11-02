import {
	Container,
	CardImg,
	CardBody,
	CardTitle,
	CardDescription,
	SeeMoreButton,
} from './styles'

export default function ModalityCard() {
	return (
		<Container>
			<CardImg src='modalidade_example.png' />

			<CardBody>
				<CardTitle>Turma 1. Fitness</CardTitle>
				<CardDescription>
					Nessa modalidade iremos treinar os bíceps e trícepts, além de treinar
					a respiração
				</CardDescription>

				<SeeMoreButton>
					<span>Ver mais</span>
				</SeeMoreButton>
			</CardBody>
		</Container>
	)
}
