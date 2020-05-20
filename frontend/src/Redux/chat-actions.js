
export const addMessage = (message, author) => {
  return {
    type: 'ADD_MESSAGE',
    message,
    author
  }
};

export const messageReceived = (message, author) => {
  return {
      type: 'MESSAGE_RECEIVED',
      message,
      author
  }
};
