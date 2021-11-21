import { IAction, IModality } from '@types'

const initialState = {
	data: [],
	loading: false,
}

interface IScheduleData extends IAction {
	type: string
	payload: {
		modalities?: Array<IModality>
		loading?: boolean
	}
}

const modalitiesReducer = (state = initialState, action: IScheduleData) => {
	switch (action.type) {
		case 'SET_MODALITIES':
			return {
				...state,
				data: action.payload.modalities,
				loading: action.payload.loading,
			}
		case 'SET_MODALITY_LOAD':
			return {
				...state,
				loading: action.payload.loading,
			}

		default:
			return { ...state }
	}
}

export default modalitiesReducer
