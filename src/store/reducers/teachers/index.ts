import { IAction, ITeacher } from '@types'

const initialState = {
	data: [],
}

interface ITeacherData extends IAction {
	type: string
	payload: {
		teachers?: Array<ITeacher>
	}
}

const teachersReducer = (state = initialState, action: ITeacherData) => {
	switch (action.type) {
		case 'SET_TEACHERS':
			return {
				...state,
				data: action.payload.teachers,
			}

		default:
			return { ...state }
	}
}

export default teachersReducer
