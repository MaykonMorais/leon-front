import './footer.scss'
import Instagram from '@assets/instagram.png'
import Wpp from '@assets/wpp.png'
import Localizacao from '@assets/localizacao.png'
import Facebook from '@assets/facebook.png'

const Footer = () => {
	return (
		<div className='footer'>
			<div className='icons'>
				<img src={Instagram} alt='' />
				<img src={Facebook} alt='' />
			</div>
			<div className='whatsapp'>
				<img src={Wpp} alt='' />
				(84) 98888-8888
			</div>
			<div className='localizacao'>
				<img src={Localizacao} alt='' />
				<span>R. Chico Pedro, 04 - Alto de São Manoel, Mossoró - RN</span>
			</div>
		</div>
	)
}

export default Footer
