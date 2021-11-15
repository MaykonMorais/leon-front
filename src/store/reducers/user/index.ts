const initialState = {}

interface IAction {
	type: string
}

const userReducer = (state = initialState, action: IAction) => {
	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				user: { name: 'Maykon Morais' },
			}
		default:
			return { ...state }
	}
}

export default userReducer
