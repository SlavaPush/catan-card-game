import produce from 'immer';
import {SET_RECEIVED_MESSAGE_STATE} from '../types'

const initialState = {
  messages: []
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_MESSAGE':
    case 'MESSAGE_RECEIVED':
      const {message, author} = action;
      if (!message) return state;
      return produce(state, draft => {
        draft.messages.push({message, author});
      });

    case SET_RECEIVED_MESSAGE_STATE:
      return produce(state, draft => {
        draft.messages = action.payload
      });


    default:
      return state;
  }
};

export default reducer;
