

export const sagaStateTransfer = (state) => {
  return {
    type: 'SAGA_STATE_TRANSFER',
   state
  }
};
