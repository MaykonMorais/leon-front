import {
	Container,
	BlogImage,
	Content,
	DateText,
	Title,
	Description,
} from './styles'

export default function index() {
	return (
		<Container>
			<BlogImage src='card_highlight_blog.png' />
			<Content>
				<DateText>05 de Março - 2021</DateText>
				<Title>Lorem Ipsum Doloret Etsum</Title>
				<Description>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tellus
					sem, tempus dictum rutrum eu, malesuada sed libero
				</Description>
			</Content>
		</Container>
	)
}
