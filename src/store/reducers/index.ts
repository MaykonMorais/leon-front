import { combineReducers } from 'redux'

// reducers
import user from './user'
import schedule from './schedule'
import modalities from './modalities'
import teachers from './teachers'
import gyms from './gyms'

const rootReducer = combineReducers({
	user,
	schedule,
	modalities,
	teachers,
	gyms,
})

export default rootReducer
