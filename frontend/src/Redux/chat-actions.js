
import {
    SET_RECEIVED_MESSAGE_STATE,
} from "./types";


export const addMessage = (message, author, idRoom) => {
  return {
    type: 'ADD_MESSAGE',
    message,
    author,
    idRoom
  }
};

export const messageReceived = (message, author) => {
  return {
      type: 'MESSAGE_RECEIVED',
        message,
        author
  }
};

export const setReceivedMessageState = (state) => {
  return {
    type: SET_RECEIVED_MESSAGE_STATE,
    payload: state,
  };
};
