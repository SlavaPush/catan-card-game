
import {
  All_Card_Random_Update,
  ERROR, S_T_P_CHANGE,
  Give_Cards, Swap_Cards,
  Buy_Development_Cards,
  SET_TOTAL_COUNT,
  Next_Player,
  Player_Name,
  Price_Development_Cards,
} from "./types";

import axios from "axios";

////////////////////////////////////CARDS
export const allCardRandomUpdate = () => {//рандомит калоду вначале игры
  return {
    type: All_Card_Random_Update,
  };
};

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

export const buyDevelopmentCards = (playerNow,developmentCardName) => {// покупка карт развития 
  //(кто, имя карты развития типа'дорога')
  return {
    type: Buy_Development_Cards,
    payload: {
      playerNow,
      developmentCardName,
    },
  };
};
export const playerName = (player,name) => {// дать имя игроку 
  //('player1', 'Тарас')
  return {
    type: Player_Name,
    payload: {
      player,
      name,
    },
  };
};

export const setTotalCount = (totalCount, player = 'player1') => {//SET TOTAL COUNTS
  return {
    type: SET_TOTAL_COUNT,
    payload: {
      player,
      totalCount,
    }
  }
}

////////////////////////////////////STEP

export const changeStep = (num) => {//номер шага
  return {
    type: S_T_P_CHANGE,
    payload: num,
  };
};

export const nextPlayer = () => {//Следующий игрок
  return {
    type: Next_Player,
  };
};

////////////////////////////////////TEMPLATES

// export const priceDevelopmentCards = () => {//Следующий игрок
//   return {
//     type: Price_Development_Cards,
//   };
// };

////////////////////////////////////ERROR
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
