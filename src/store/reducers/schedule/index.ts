import { IAction, ISchedule } from '@types'

const initialState = {
	data: [],
}

interface IScheduleData extends IAction {
	type: string
	payload: {
		schedules: Array<ISchedule>
	}
}

const scheduleReducer = (state = initialState, action: IScheduleData) => {
	switch (action.type) {
		case 'SET_SCHEDULE':
			return {
				...state,
				data: action.payload.schedules,
			}

		default:
			return { ...state }
	}
}

export default scheduleReducer
