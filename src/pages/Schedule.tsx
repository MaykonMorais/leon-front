import Navbar from '@components/Navbar/Navbar'
import Item from '@components/Item/Item'
import Tittle from '@components/Schendule/Tittle'
import { ModelItem } from '@src/types'

const LandingPage = () => {
	const data: Array<ModelItem> = [
		{
			title: 'Judô',
			num: 24,
			subtitle: '14:20 - 13:20',
			locale: 'Sede Principal',
		},
		{
			title: 'Iôga',
			num: 29,
			subtitle: '11:00 - 12:00',
			locale: 'Sede Principal',
		},
		{
			title: 'Judô',
			num: 22,
			subtitle: '17:30 - 18:30',
			locale: 'Sede Principal',
		},
	]

	return (
		<div>
			<Navbar />
			<Tittle />
			{data.map(function (item) {
				// eslint-disable-next-line react/jsx-key
				return <Item item={item} haveLocale={true} haveTrash={true} />
			})}
		</div>
	)
}

export default LandingPage
