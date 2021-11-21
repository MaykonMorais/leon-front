import mapPin from '@assets/map-pin.png'
import { ModelItem } from '@types'
import Image from 'next/image'

import { FiTrash } from 'react-icons/fi'

import {
	Container,
	Father,
	Titles,
	Title,
	Subtitle,
	Locale,
	Number,
	ContainerEnd,
	Wrapper,
} from './style'

interface props {
	item: ModelItem
	haveLocale: boolean
	haveTrash: boolean
	duration?: number
}

const Item = ({
	item: { title, num, subtitle, locale },
	haveLocale,
	haveTrash,
	duration,
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
		return <FiTrash width={15} height={15} cursor='pointer' />
	}

	return (
		<Wrapper duration={duration}>
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
		</Wrapper>
	)
}

export default Item
