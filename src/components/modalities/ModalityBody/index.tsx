import { useEffect } from 'react'
import ContentLoader from 'react-content-loader'

import { useDispatch, useSelector } from 'react-redux'
import { getModalities } from '@actions/modalities'

import ModalityCard from '../ModalityCard'

import { Container } from './styles'
import { IRootState } from '@src/types'
import Loading from '@src/components/common/Loading'

export default function ModalityBody() {
	const dispatch = useDispatch()
	const { data, loading } = useSelector((state: IRootState) => state.modalities)

	useEffect(() => {
		dispatch(getModalities())
	}, [dispatch])

	return (
		<>
			{!loading ? (
				<Container>
					{data.length > 0 && (
						<>
							{data.map(modality => {
								return <ModalityCard key={modality.id} data={modality} />
							})}
						</>
					)}
				</Container>
			) : (
				<Loading />
			)}
		</>
	)
}

/* {data.length > 0 && (
				<>
					{data.map(modality => {
						return <ModalityCard key={modality.id} data={modality} />
					})}
				</>
			)} */
