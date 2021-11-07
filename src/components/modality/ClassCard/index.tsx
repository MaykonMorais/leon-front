import { FiClock, FiMapPin, FiUser, FiDollarSign } from 'react-icons/fi'
import {
	Container,
	RegisterButton,
	Section,
	SectionText,
	SectionArea,
	SectionDescription,
	TeacherPhoto,
} from './styles'

export default function ClassCard() {
	return (
		<Container>
			<Section>
				<SectionArea>
					<SectionText>
						<FiClock size={18} />
						<SectionDescription>6h às 17h</SectionDescription>
					</SectionText>
					<SectionText>
						<FiUser size={18} />
						<SectionDescription>Professor Fernando Novais</SectionDescription>
					</SectionText>
					<SectionText>
						<FiMapPin size={18} />
						<SectionDescription>
							Academia generica, na rua dos bobos
						</SectionDescription>
					</SectionText>
					<SectionText>
						<FiDollarSign color={'#25B002'} size={18} />
						<SectionDescription color='#25B002'>R$ 50</SectionDescription>
					</SectionText>
				</SectionArea>
				<TeacherPhoto src='https://thispersondoesnotexist.com/image' />
			</Section>

			<SectionText>
				<RegisterButton>Registrar aula experimental</RegisterButton>
			</SectionText>
		</Container>
	)
}
