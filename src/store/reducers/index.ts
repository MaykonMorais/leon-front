import { combineReducers } from 'redux'

// reducers
import user from './user'
import schedule from './schedule'

const rootReducer = combineReducers({ user, schedule })

export default rootReducer
