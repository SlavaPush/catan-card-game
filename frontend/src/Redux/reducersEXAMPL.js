import { All_Card_Random_Update, ERROR } from "./actionTypes";
import produce from "immer";

const initialState = {
  step: {
    one:true,
    two:false,
    three:false,
    four:false,
    five:false,
  },
  player1: {name:'Grok', cards:[],},
  marketCards:[],
  cardsInGame:[],
  error: null,
};

export function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case All_Card_Random_Update: {
      return produce(state, draft => {
        const wool = new Array(15).fill('шерсть')
        const wooD = new Array(11).fill('дерево')
        const ore = new Array(16).fill('руда')
        const clay = new Array(11).fill('глина')
        const corn = new Array(14).fill('зерно')
        let card = [...wool,...wooD,...ore,...clay,...corn]
        card.sort((a,b)=>{return Math.random() - 0.5 })
        draft.cardsInGame = card;
      });
    }






    case ERROR: {
      return produce(state, draft => {
        draft.loading = false;
        draft.img = null;
        draft.error = payload;
      });
    }
    default:
      return state;
  }
}

// return produce(state, draft => {
//   draft.push('example')
// })
