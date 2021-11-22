import axios from 'axios'
import { toast } from 'react-toastify'

import { Dispatch } from 'redux'
import { ITeacher } from '@types'

import { getTeachersData } from '@services/teachers'

export function getTeachers() {
	return async (dispatch: Dispatch) => {
		try {
			const data: Array<ITeacher> = await getTeachersData()

			dispatch({
				type: 'SET_TEACHERS',
				payload: { teachers: data },
			})
		} catch (error) {
			if (axios.isAxiosError(error)) {
				const notify = () => toast.error('Ops! Algo de errado ocorreu')
				notify()
			}
		}
	}
}
