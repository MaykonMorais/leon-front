import Header from '@components/common/Header'
import ModalityDetail from '@components/modality/ModalityDetail'
import Filters from '@components/modality/Filters'
import AvaliableClasses from '@src/components/modality/AvaliableClasses'

export default function Modality() {
	return (
		<>
			<Header />
			<ModalityDetail />

			<Filters />
			<AvaliableClasses />
		</>
	)
}
