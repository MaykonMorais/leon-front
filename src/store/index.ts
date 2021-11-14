import thunk, { ThunkMiddleware } from 'redux-thunk'
import createDebounce from 'redux-debounced'
import { createStore, applyMiddleware, compose, Middleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducers'

const middleWare: (Middleware | ThunkMiddleware)[] = [thunk, createDebounce()]

const store = createStore(
	rootReducer,
	{},
	process.env.NODE_ENV === 'development'
		? composeWithDevTools(applyMiddleware(...middleWare))
		: compose(applyMiddleware(...middleWare))
)

export { store }
