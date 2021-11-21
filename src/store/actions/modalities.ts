import axios from 'axios'
import { toast } from 'react-toastify'

import { Dispatch } from 'redux'
import { IModality } from '@types'

import { getModalitiesData } from '@services/modalities'

export function getModalities() {
	return async (dispatch: Dispatch) => {
		try {
			dispatch({ type: 'SET_MODALITY_LOAD', payload: { loading: true } })
			const data: Array<IModality> = await getModalitiesData()

			dispatch({
				type: 'SET_MODALITIES',
				payload: { modalities: data, loading: false },
			})
		} catch (error) {
			if (axios.isAxiosError(error)) {
				const notify = () => toast.error('Ops! Algo de errado ocorreu')
				notify()
			}
		}
	}
}
