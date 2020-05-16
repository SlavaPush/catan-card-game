import {combineReducers} from 'redux'
import cards from './reducers/cards'
import steps from './reducers/steps'
import template from './reducers/template'



export default combineReducers({
  cards,
  steps,
  template
})
