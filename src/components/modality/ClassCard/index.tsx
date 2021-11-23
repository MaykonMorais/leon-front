import { IClass } from '@src/types'
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

interface ClassCardProps {
	data: IClass
}

export default function ClassCard({
	data: { teacher, gym, intervals, price },
}: ClassCardProps) {
	return (
		<Container>
			<Section>
				<SectionArea>
					<SectionText>
						<FiClock size={18} />
						<SectionDescription>{`${intervals[0].initialTime} às ${intervals[0].finalTime}`}</SectionDescription>
					</SectionText>
					<SectionText>
						<FiUser size={18} />
						<SectionDescription>{`Professor(a) ${teacher.name}`}</SectionDescription>
					</SectionText>
					<SectionText>
						<FiMapPin size={18} />
						<SectionDescription>{gym.address}</SectionDescription>
					</SectionText>
					<SectionText>
						<FiDollarSign color={'#25B002'} size={18} />
						<SectionDescription color='#25B002'>{`R$ ${price}`}</SectionDescription>
					</SectionText>
				</SectionArea>
				<TeacherPhoto src={teacher.avatarURL} />
			</Section>

			<SectionText>
				<RegisterButton>Registrar aula experimental</RegisterButton>
			</SectionText>
		</Container>
	)
}
