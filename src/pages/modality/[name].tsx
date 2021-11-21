import { useEffect, useCallback, useState } from 'react'
import { useRouter } from 'next/router'

import { useSelector, useDispatch } from 'react-redux'
import { getModalityByName } from '@actions/modalities'

import Header from '@components/common/Header'
import ModalityDetail from '@components/modality/ModalityDetail'
import Filters from '@components/modality/Filters'
import AvaliableClasses from '@src/components/modality/AvaliableClasses'
import { IModality, IRootState } from '@src/types'

export default function Modality() {
	const [modality, setModality] = useState<IModality | null>(null)

	const router = useRouter()
	const dispatch = useDispatch()

	const { data, resultSearch } = useSelector(
		(state: IRootState) => state.modalities
	)

	const findByName = useCallback(
		(name: string) => {
			return data.filter(modality => modality.name === name)
		},
		[data]
	)

	useEffect(() => {
		const { name } = router.query

		const modality = findByName(name as string)[0]

		if (!modality) {
			dispatch(getModalityByName(name as string))
		} else {
			setModality(modality)
		}
	}, [findByName, router.query, dispatch])

	return (
		<>
			<Header />
			{(modality || resultSearch) && (
				<>
					<ModalityDetail props={modality || resultSearch} />

					<Filters />
					<AvaliableClasses />
				</>
			)}
		</>
	)
}
