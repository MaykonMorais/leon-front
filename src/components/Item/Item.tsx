import mapPin from '@assets/map-pin.png'
import trash from '@assets/trash.png'

import Image from 'next/image'

interface Item {
	number: number
	title: string
	subtitle: string
	locale: string
	haveLocale: boolean
	haveTrash: boolean
}

const Item = ({
	title,
	number,
	subtitle,
	locale,
	haveLocale,
	haveTrash,
}: Item) => {
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
