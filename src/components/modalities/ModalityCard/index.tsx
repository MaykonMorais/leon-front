import { IModality } from '@src/types'
import {
	Container,
	CardImg,
	CardBody,
	CardTitle,
	CardDescription,
	SeeMoreButton,
} from './styles'

interface ModalityProps {
	data: IModality
}

export default function ModalityCard({
	data: { name, description, imageURL },
}: ModalityProps) {
	return (
		<Container>
			<CardImg src={imageURL} />

			<CardBody>
				<CardTitle>{name}</CardTitle>
				<CardDescription>{description}</CardDescription>

				<SeeMoreButton>
					<span>Ver mais</span>
				</SeeMoreButton>
			</CardBody>
		</Container>
	)
}
