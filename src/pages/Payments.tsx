import Navbar from '@components/Navbar/Navbar'
import Item from '@components/Item/Item'
import Tittle from '@components/Schendule/Tittle'
import { ModelItem } from '@src/types'

const Payments = () => {
	const data: Array<ModelItem> = [
		{
			title: 'Judô',
			num: '69$',
			subtitle: 'Pago',
		},
		{
			title: 'Pilates',
			num: '42$',
			subtitle: 'Atrasado',
		},
		{
			title: 'Judô',
			num: '69$',
			subtitle: 'Pendente',
		},
		{
			title: 'Pilates',
			num: '42$',
			subtitle: 'Pendente',
		},
	]

	return (
		<div>
			<Navbar />
			<Tittle right={false} />
			{data.map(function (item) {
				// eslint-disable-next-line react/jsx-key
				return <Item item={item} haveLocale={false} haveTrash={false} />
			})}
		</div>
	)
}

export default Payments
