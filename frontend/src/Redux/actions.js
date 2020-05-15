import { All_Card_Random_Update, ERROR, S_T_P_CHANGE,Give_Cards} from "./types";
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
//   num:50,
//   whom:'marketCards'
// }}
// {type: 'Give_Cards',
// payload:{
//   num:15,
//   whom:'cards',
//   player:'player1'
// }}
// {
//   type: 'S_T_P_CHANGE',
//   payload: 1,
// }
export const giveCards = (num,whom,player) => {// сколько карт, куда(строка), ЕСЛИ ИГРОКУ  player1
  return {
    type: Give_Cards,
    payload: {
      num,
      whom,
      player
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
