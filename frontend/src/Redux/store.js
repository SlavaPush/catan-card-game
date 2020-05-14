import {createStore} from 'redux'
import {ADD,SUB,SET} from './types'

//@step2 задать начльный стейт
const initialState = {
  counter: 0
}
//задать начльный REDUSER
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD:{
      const newState = {...state}
      newState.counter += 1
      return newState
    }
    case SUB:{
      const newState = {...state}
      newState.counter -= 1
      return newState
    }
    case SET:{
      const newState = {...state}
      newState.counter = action.number
      return newState
    }

    default:{
      return state;
    }
      
  }

}

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store
