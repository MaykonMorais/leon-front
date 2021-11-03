import Navbar from '../components/Navbar/Navbar'
import Item from '../components/Item/Item'
import { ModelItem } from '@src/types'
const LandingPage = () => {
	const i: ModelItem = {
		title: 'asda',
		num: 25,
		subtitle: 'fsdfs',
		locale: 'sdfs',
	}

	return (
		<div>
			<Navbar />

			<Item item={i} haveLocale={true} haveTrash={true} />
		</div>
	)
}

export default LandingPage
