import { combineReducers } from 'redux'

// reducers
import userReducer from './user'

const rootReducer = combineReducers({ userReducer })

export default rootReducer
