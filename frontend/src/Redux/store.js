import {createStore, applyMiddleware} from 'redux'
import rootReducer from './rootReducer'
import { composeWithDevTools  } from 'redux-devtools-extension';
// import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware )));

export {
  sagaMiddleware
}

export default store
