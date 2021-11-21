import { Container, Right, Button, Left } from './styles'
interface props {
	right: boolean
}
const Head = ({ right }: props) => {
	return (
		<Container>
			<Left>
				<span>De hoje até 22 de março</span>
			</Left>

			{right && (
				<Right>
					<div>
						<span>Você tem 1 aula disponível para remarcação.</span>
					</div>
					<Button>
						<button className='button'>Remarcar agora</button>
					</Button>
				</Right>
			)}
		</Container>
	)
}
export default Head
