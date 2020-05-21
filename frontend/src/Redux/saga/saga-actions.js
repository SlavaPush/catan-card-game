

export const sagaStateTransfer = (id, state) => {
  return {
    type: 'SAGA_STATE_TRANSFER',
    state,
    id
  }
};

export const sagaSearchStateInRoom = (id) => {
  return {
    type: 'SAGA_SEARCH_ROOM_IN_DB',
    id
  }
};

export const sagaWinnerNow = (playerNow) => {
  return {
    type: 'SAGA_WINNER_NOW',
    playerNow
  }
};



//  btnnext disp(plNow)-> sagaAction -> back(plNow) -> front(plNow) всем кроме себя-> action (playerLOSER)

