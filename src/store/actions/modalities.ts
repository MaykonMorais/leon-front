import axios from 'axios'
import { toast } from 'react-toastify'

import { Dispatch } from 'redux'
import { IModality } from '@types'

import { getModalitiesData, searchModalityByName } from '@services/modalities'

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

export function getModalityByName(name: string) {
	return async (dispatch: Dispatch) => {
		try {
			const data: Array<IModality> = await searchModalityByName(name)

			dispatch({
				type: 'SET_SEARCHED_MODALITY',
				payload: { resultSearch: data[0] },
			})
		} catch (error) {
			if (axios.isAxiosError(error)) {
				const notify = () => toast.error('Ops! Algo de errado ocorreu')
				notify()
			}
		}
	}
}
