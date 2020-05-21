import {
  setReceivedCardsState,
  resivedChangeStep,
  winnerNowRedux,
  removeOpponentCard,
  cityLogic,
} from '../Redux/actions';


const setupSocket = (dispatch, cb) => {
    const socket = new WebSocket('ws://localhost:3001');

    socket.onopen = cb
    
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      switch(data.type) {
        case 'TEST_STATE_SERVER_TO_CLIENT':
          const {state} = data;
              dispatch(setReceivedCardsState(state))
              break;
              case 'CHANGE_STEP_TO_CLIENT':
                dispatch(resivedChangeStep())
                break;
              case 'STATE_FOR_PLAYER_2_RECIVED':
                dispatch(setReceivedCardsState(data.state))
                break;
              case 'WINNER_NOW_TO_CLIENT':
                dispatch(winnerNowRedux(data.winner))
                break;
              case 'REMOVE_OPPONENT_CARD':
                dispatch(removeOpponentCard(data.payload))
                break;
              case 'CITY_LOGIC':
                console.log(data);
                
                dispatch(cityLogic(data.playerNow,data.countString))
                break;
      }
    }

    return socket;
};

export default setupSocket;
