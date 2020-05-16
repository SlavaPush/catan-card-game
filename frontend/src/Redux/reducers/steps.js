import { S_T_P_CHANGE,Next_Player } from "../types";
import produce from "immer";

const initialState = {
  step: [/* false, */false,false,false,false],// 4 step in game
  playerNow:'player1',
};

export default function steps(state = initialState, { type, payload }) {
  switch (type) {
    case S_T_P_CHANGE: {
      return produce(state, draft => {
        let newMap = draft.step.map((el,index)=>{
          return (index+1 === payload)? el = true : el = false
        })
        draft.step = newMap;
      });
    }
    case Next_Player: {
      return produce(state, draft => {
        if (state.playerNow === 'player1') {
          draft.playerNow = 'player2';
        }else{
          draft.playerNow = 'player1';
        }
      });
    }
    default:
      return state;
  }
}
