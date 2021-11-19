import { Container, Right, Left } from './styles'

export default function Head() {
	return (
		<Container>
			<Left>
				<span>De hoje até 22 de março</span>
			</Left>
			<Right>
				<span>Você tem 1 aula disponível para remarcação.</span>
				<button className='button'>Remarcar agora</button>
			</Right>
		</Container>
	)
}
