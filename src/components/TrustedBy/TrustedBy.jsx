import Adidas from '@assets/Adidas.png'
import Puma from '@assets/Puma.png'
import Netshoes from '@assets/Netshoes.png'
import Nike from '@assets/Nike.png'
import Image from 'next/image'

const TrustedBy = () => {
	return (
		<div className='trustedBy'>
			<Image src={Nike} alt='' />
			<Image src={Adidas} alt='' />
			<Image src={Puma} alt='' />
			<Image src={Netshoes} alt='' />
		</div>
	)
}

export default TrustedBy
