import { combineReducers } from 'redux'

// reducers
import user from './user'
import schedule from './schedule'
import modalities from './modalities'

const rootReducer = combineReducers({ user, schedule, modalities })

export default rootReducer
