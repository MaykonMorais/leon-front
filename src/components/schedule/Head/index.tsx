import {
	Container,
	DayText,
	LeftContent,
	RigthContent,
	InfoMarkdown,
	RescheduleButton,
} from './styles'

export default function HeadSchedule() {
	return (
		<Container>
			<LeftContent>
				<DayText>De hoje até Março</DayText>
			</LeftContent>

			<RigthContent>
				<InfoMarkdown>
					Você tem <InfoMarkdown bold>1 aula</InfoMarkdown> disponível para
					remarcação.
				</InfoMarkdown>
				<RescheduleButton>Remarcar Agora</RescheduleButton>
			</RigthContent>
		</Container>
	)
}
