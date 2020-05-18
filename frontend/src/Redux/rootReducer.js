import { combineReducers } from 'redux'
import cards from './reducers/cards'
import template from './reducers/template';

export default combineReducers({ cards, template})
