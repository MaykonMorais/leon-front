import axios from 'axios'
import { toast } from 'react-toastify'

import { Dispatch } from 'redux'
import { IGym } from '@types'

import { getGymsData } from '@services/gyms'

export function getGyms() {
	return async (dispatch: Dispatch) => {
		try {
			const data: Array<IGym> = await getGymsData()

			dispatch({ type: 'SET_GYMS', payload: { gyms: data } })
		} catch (error) {
			if (axios.isAxiosError(error)) {
				const notify = () => toast.error('Ops! Algo de errado ocorreu')
				notify()
			}
		}
	}
}
