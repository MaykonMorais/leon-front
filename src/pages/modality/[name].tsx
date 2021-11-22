import { useEffect, useCallback, useState } from 'react'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'

import { parseCookies } from 'nookies'
import { config } from '@utils/config'

import { useSelector, useDispatch } from 'react-redux'
import { getModalityByName } from '@actions/modalities'
import { getTeachers } from '@actions/teachers'

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
		dispatch(getTeachers())

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

export const getServerSideProps: GetServerSideProps = async ctx => {
	const { [`${config.storageUserToken}`]: token } = parseCookies(ctx)

	if (!token) {
		return {
			redirect: {
				destination: '/login',
				permanent: false,
			},
		}
	}

	return {
		props: {},
	}
}
