import { Container,Right,Button,Left } from './styles'

export default function Head() {
	return (
		<Container>
		<Left>	
			<span>De hoje até 22 de março</span>
		</Left>
		
		<Right>
			<div>
				<span>Você tem 1 aula disponível para remarcação.</span>
			</div>
			<Button>	
				<button className='button'>Remarcar agora</button>
			</Button>
		</Right>
		</Container>
	)
}
