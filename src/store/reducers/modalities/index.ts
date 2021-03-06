import { IAction, IModality } from '@types'

const initialState = {
	data: [],
	loading: false,
	resultSearch: null,
	searchedClasses: [],
}

interface IScheduleData extends IAction {
	type: string
	payload: {
		modalities?: Array<IModality>
		loading?: boolean
		resultSearch?: IModality
		searchedClasses: any
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

		case 'SET_SEARCHED_MODALITY':
			return {
				...state,
				resultSearch: action.payload.resultSearch,
			}
		case 'SET_SEARCHED_CLASSES':
			return {
				...state,
				searchedClasses: action.payload.searchedClasses,
			}
		default:
			return { ...state }
	}
}

export default modalitiesReducer
