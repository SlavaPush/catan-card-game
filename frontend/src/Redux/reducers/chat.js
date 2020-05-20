import produce from 'immer';

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


    default:
      return state;
  }
};

export default reducer;
