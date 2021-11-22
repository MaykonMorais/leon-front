import { IAction, IGym } from '@types'

const initialState = {
	data: [],
}

interface IGymData extends IAction {
	type: string
	payload: {
		gyms?: Array<IGym>
	}
}

const gymsReducer = (state = initialState, action: IGymData) => {
	switch (action.type) {
		case 'SET_GYMS':
			return {
				...state,
				data: action.payload.gyms,
			}

		default:
			return { ...state }
	}
}

export default gymsReducer
