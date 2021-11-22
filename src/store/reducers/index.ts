import { combineReducers } from 'redux'

// reducers
import user from './user'
import schedule from './schedule'
import modalities from './modalities'
import teachers from './teachers'

const rootReducer = combineReducers({ user, schedule, modalities, teachers })

export default rootReducer
