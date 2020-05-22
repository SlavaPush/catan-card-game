
import {
  setReceivedCardsState,
  resivedChangeStep,
  winnerNowRedux,
  removeOpponentCard,
  cityLogic,
} from '../Redux/actions';
import {messageReceived} from '../Redux/chat-actions';


const setupSocket = (dispatch, callBack) => {
    const socket = new WebSocket(window.location.origin.replace(/^http/, 'ws')); // DEPLOY

    socket.onopen = callBack
    
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
                dispatch(cityLogic(data.playerNow,data.countString))
                break;
                case 'MESSAGE_RECEIVED':
              dispatch(messageReceived(data.message, data.author));
              break;
      }
    }

    return socket;
};

export default setupSocket;
