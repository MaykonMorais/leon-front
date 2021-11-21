import { IModality } from '@src/types'
import {
	Container,
	ImageDetail,
	LeftContent,
	RightContent,
	Title,
	Description,
} from './styles'

interface ModalityDetailProps {
	props: IModality
}

export default function ModalityDetail({
	props: { name, description, imageURL },
}: ModalityDetailProps) {
	return (
		<Container>
			<LeftContent>
				<ImageDetail src={imageURL} />
			</LeftContent>

			<RightContent>
				<Title>{name}</Title>
				<Description>{description}</Description>
			</RightContent>
		</Container>
	)
}
