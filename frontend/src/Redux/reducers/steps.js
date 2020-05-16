import { S_T_P_CHANGE } from "../types";
import produce from "immer";

const initialState = {
  step: [/* false, */false,false,false,false],// 4 step in game

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
    default:
      return state;
  }
}
