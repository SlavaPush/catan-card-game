import { All_Card_Random_Update, ERROR, S_T_P_CHANGE,Give_Cards,Swap_Cards} from "./types";
import axios from "axios";

// CARDS
export const allCardRandomUpdate = () => {//рандомит калоду вначале игры
  return {
    type: All_Card_Random_Update,
  };
};
// {type: 'All_Card_Random_Update',
// }
// {type: 'Give_Cards',
// payload:{
//   num:5,
//   whom:'marketCards'
// }}
// {type: 'Give_Cards',
// payload:{
//   num:5,
//   whom:'cards',
//   player:'player1'
// }}
// {type: 'Swap_Cards',
// payload: {
//   playerNow:'player1',
//   idPlayerCards:"8e4c1e11-7577-4b58-b556-ab61eaaed4c0",
//   whom:'marketCards',
//   idWhomCards:"dc594795-1944-436c-af11-4263f135836e",
// }}
// {type: 'Swap_Cards',
// payload: {
//   playerNow:'player1',
//   idPlayerCards:"dc594795-1944-436c-af11-4263f135836e",
//   whom:'cardsInGame',
// }}

// {
//   type: 'S_T_P_CHANGE',
//   payload: 1,
// }
export const giveCards = (num,whom,player) => {// (сколько карт, куда(строка), ЕСЛИ ИГРОКУ  player1)
  return {
    type: Give_Cards,
    payload: {
      num,
      whom,
      player
    },
  };
};
export const swapCards = (playerNow,idPlayerCards,whom,idWhomCards) => {// обмен с рынком или колодой
  //РЫНОК (игрок сейчас, idкарты игрока, у кого обмен,idкарты у кого обмен) 
  //КОЛОДА (игрок сейчас, idкарты игрока, у кого обмен) 
  return {
    type: Swap_Cards,
    payload: {
      playerNow,
      idPlayerCards,
      whom,
      idWhomCards
    },
  };
};
////////////////////////////////////

// CHANGE STEP
export const changeStep = (num) => {//номер шага
  return {
    type: S_T_P_CHANGE,
    payload: num,
  };
};

////////////////////////////////////

export const error = (err) => {
  return {
    type: ERROR,
    payload: err,
  };
};

// export const reduxStateUpdateThunk = () => (dispatch) => {
//   axios("https://api.thecatapi.com/v1/images/search").then(
//     (res) => {
//       dispatch(reduxStateUpdate(res.data));
//     },
//     (err) => {
//       dispatch(error(err.message));
//     }
//   );
// };
