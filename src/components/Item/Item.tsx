import mapPin from '@assets/map-pin.png'
import trash from '@assets/trash.png'
import { ModelItem } from '@types'
import Image from 'next/image'

interface props {
	item: ModelItem
	haveLocale: boolean
	haveTrash: boolean
}

const Item = ({
	item: { title, num, subtitle, locale },
	haveLocale,
	haveTrash,
}: props) => {
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
				<span className='number'>{num}</span>

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
