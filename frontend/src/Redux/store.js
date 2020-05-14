import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import {rootReducer} from '../Redux/reducers.js'
import { composeWithDevTools  } from 'redux-devtools-extension';
// import thunk from 'redux-thunk'

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger/* , thunk */)))
