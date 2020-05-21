import { combineReducers } from 'redux'
import cards from './reducers/cards'
import template from './reducers/template';
import chat from './reducers/chat';

export default combineReducers({ cards, template, chat})
