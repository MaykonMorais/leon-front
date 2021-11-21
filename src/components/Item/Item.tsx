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
	Txtgray,
	Txtred,
	Txtgreen,
	Txtyelow,
} from './styles'

interface props {
	item: ModelItem
	haveLocale?: boolean
	haveTrash?: boolean
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

	function colorNumber() {
		let ret

		if (subtitle === 'Pago') ret = <Txtgreen>{num}</Txtgreen>
		else if (subtitle === 'Atrasado') ret = <Txtyelow>{num}</Txtyelow>
		else if (subtitle === 'Pendente') ret = <Txtred>{num}</Txtred>
		else ret = <Txtgray>{num}</Txtgray>

		return ret
	}

	return (
		<Container>
			<Father>
				<Number>{colorNumber()}</Number>

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
