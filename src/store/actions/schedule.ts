import axios from 'axios'
import { toast } from 'react-toastify'

import { Dispatch } from 'redux'
import { ISchedule } from '@types'

import { getSchedules } from '@services/schedules'

export function getSchedule() {
	return async (dispatch: Dispatch) => {
		try {
			const data: Array<ISchedule> = await getSchedules()

			dispatch({ type: 'SET_SCHEDULE', payload: { schedules: data } })
		} catch (error) {
			if (axios.isAxiosError(error)) {
				const notify = () => toast.error('Ops! Algo de errado ocorreu')
				notify()
			}
		}
	}
}
