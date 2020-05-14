import { All_Card_Random_Update,Give_Cards} from "../types";
import produce from "immer";

const initialState = {
  marketCards:[],
  cardsInGame:[],
  developmentCards:['city'],
  player1:[],
  player2:[],
};


export default function cards(state = initialState, { type, payload }) {
  switch (type) {
    case All_Card_Random_Update: {
      return produce(state, draft => {
        const wool = new Array(15).fill('шерсть')
        const wooD = new Array(11).fill('дерево')
        const ore = new Array(16).fill('руда')
        const clay = new Array(11).fill('глина')
        const corn = new Array(14).fill('зерно')
        let cards = [...wool,...wooD,...ore,...clay,...corn]
        cards.sort((a,b)=>{return Math.random() - 0.5 })
        draft.cardsInGame = cards;
      });
    }
    case Give_Cards: {
      return produce(state, draft => {
      const origin = draft.cardsInGame
      const cardForWhom = origin.splice(0,payload.num)
      draft.marketCards.push(cardForWhom)
      draft.cardsInGame = origin;
      });
    }

    default:
      return state;
  }
}
