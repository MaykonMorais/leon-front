import ModalidadeImg from '../assets/Modalidade1.png'
import Image from 'next/image'

const Info = () => {
	return (
		<div className='info'>
			<div className='infoBox'>
				<h1>Modalidades</h1>
				<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
				<div className='modBox'>
					<div className='mod'>
						<Image src={ModalidadeImg} alt='' />
						<h2>Turma 1: Mod. Fit</h2>
						<span>
							Nessa modalidade iremos treinar os bíceps e trícepts, além de
							treinar a respiração
						</span>
					</div>
					<div className='mod'>
						<Image src={ModalidadeImg} alt='' />
						<h2>Turma 2: Mod. Stress Fit</h2>
						<span>
							Nessa modalidade iremos treinar os bíceps e trícepts, além de
							treinar a respiração
						</span>
					</div>
					<div className='mod'>
						<Image src={ModalidadeImg} alt='' />
						<h2>Turma 3: Não sei</h2>
						<span>
							Nessa modalidade iremos treinar os bíceps e trícepts, além de
							treinar a respiração
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Info
