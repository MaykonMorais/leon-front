import mapPin from '@assets/map-pin.png'
import trash from '@assets/trash.png'
import { ModelItem } from '@types'
import Image from 'next/image'

import {
	Container,
	Father,
	Titles,
	Title,
	Subtitle,
	Locale,
	Number,
	ContainerEnd,
} from './style'

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
			<Locale>
				<Image src={mapPin} width={15} height={15} alt='' />
				<Title>{locale}</Title>
			</Locale>
		)
	}

	function renderTrash() {
		return <Image className='trash' width={15} height={15} src={trash} alt='' />
	}

	return (
		<Container>
			<Father>
				<Number>{num}</Number>

				<Titles>
					<Title>{title}</Title>
					<Subtitle>{subtitle}</Subtitle>
				</Titles>

				{haveLocale && renderLocale()}
			</Father>

			<ContainerEnd>{haveTrash && renderTrash()}</ContainerEnd>
		</Container>
	)
}

export default Item
