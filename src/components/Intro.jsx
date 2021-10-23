import Hero from '../assets/Hero.png'
import Image from 'next/image'
import Link from 'next/link'

const Intro = () => {
	return (
		<div className='intro'>
			<div className='left'>
				<div className='textBox'>
					<h1>Cuide da sua saúde</h1>
					<span>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tellus
						sem, tempus dictum rutrum eu, malesuada sed libero
					</span>
					<Link passHref href='/Register'>
						<button>Experimente grátis</button>
					</Link>
				</div>
			</div>
			<div className='right'>
				<Image src={Hero} alt='' />
			</div>
		</div>
	)
}

export default Intro
