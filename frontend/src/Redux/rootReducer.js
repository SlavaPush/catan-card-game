import {combineReducers} from 'redux'
import cards from './reducers/cards'
import steps from './reducers/steps'



export default combineReducers({
  cards,
  steps
})
