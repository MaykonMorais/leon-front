import Peso from '@assets/peso.png'
import Image from 'next/image'

const MenuAdmin = () => {
	return (
		<div
			className='w-80 h-72'
			style={{ display: 'inline-block', marginRight: 50, marginTop: 50 }}
		>
			<div className='inline-flex flex-col space-y-1.5 items-center justify-end flex-1 h-full px-12 pt-5 pb-4 bg-white shadow rounded-2xl'>
				<Image src={Peso} alt='' />
				<p className='w-48 h-4 text-2xl font-extrabold leading-loose'>
					Modalidades
				</p>
				<br />
				<p className='w-full h-14 text-sm leading-relaxed text-center'>
					Modalidades disponíveis no estabelecimento
				</p>
			</div>
		</div>
	)
}

export default MenuAdmin
