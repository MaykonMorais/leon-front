import { Container, Card, Icon, TitleCard, DescriptionCard } from './styles'

export default function MenuAdmin() {
	return (
		<Container>
			<Card>
				<Icon src='peso.png' />
				<TitleCard>Modalidades</TitleCard>
				<DescriptionCard>
					Aqui você visualiza as modalidades disponíveis no estabelecimento
				</DescriptionCard>
			</Card>

			<Card>
				<Icon src='peso.png' />
				<TitleCard>Turmas</TitleCard>
				<DescriptionCard>
					Aqui você visualiza as turmas disponíveis no estabelecimento
				</DescriptionCard>
			</Card>
			<Card>
				<Icon src='peso.png' />
				<TitleCard>Professores</TitleCard>
				<DescriptionCard>
					Aqui você gerencia os profissionais de seu estabelecimento
				</DescriptionCard>
			</Card>

			<Card>
				<Icon src='peso.png' />
				<TitleCard>Blog</TitleCard>
				<DescriptionCard>
					Aqui você gerenciar as postagens de notícias do seu blog
				</DescriptionCard>
			</Card>
			<Card>
				<Icon src='peso.png' />
				<TitleCard>Horários</TitleCard>
				<DescriptionCard>
					Aqui você visualiza gerencia os horários disponíveis
				</DescriptionCard>
			</Card>
			<Card>
				<Icon src='peso.png' />
				<TitleCard>Horários</TitleCard>
				<DescriptionCard>
					Aqui você visualiza gerencia os horários disponíveis
				</DescriptionCard>
			</Card>
		</Container>
	)
}
