import mapPin from '../assets/map-pin.png'
import trash from '../assets/trash.png'

import Image from 'next/image'
const Item = () => {
	var number = 25
	var title = 'Judô'
	var subtitle = '11:00 - 12:00'
	var locale = 'Sede Principal'
	var haveLocale = false
	var haveTrash = true

	function renderLocale() {
		return (
			<div className='locale'>
				<Image src={mapPin} width={15} height={15} alt='' />
				<span>{locale}</span>
			</div>
		)
	}

	function renderTrash() {
		return <Image className='trash' width={15} height={15} src={trash} alt='' />
	}

	return (
		<div className='item'>
			<div className='father'>
				<span className='number'>{number}</span>

				<div className='titles'>
					<span className='title'>{title}</span>
					<span className='subtitle'>{subtitle}</span>
				</div>

				{haveLocale && renderLocale()}
			</div>

			{haveTrash && renderTrash()}
		</div>
	)
}

export default Item
