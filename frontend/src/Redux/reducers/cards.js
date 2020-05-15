import { All_Card_Random_Update,Give_Cards,Swap_Cards} from "../types";
import produce from "immer";
import { v4 as uuid } from 'uuid';
// uuidv4();

const initialState = {
  marketCards:[],
  cardsInGame:[],
  developmentCards:[],
  player1:{cards:[],developmentCards:[] },
  player2:{cards:[],developmentCards:[] },
};


export default function cards(state = initialState, { type, payload }) {
  switch (type) {
    case Give_Cards: {//отдает карты
      return produce(state, draft => {
      const origin = draft.cardsInGame
      const cardForWhom = origin.splice(0,payload.num)
      const player = payload.player || false
      if(player){
        console.log("cards -> payload.whom", draft[payload.player][payload.whom])
        draft[payload.player][payload.whom].push(...cardForWhom)
        draft.cardsInGame = origin;
      }else{
        draft[payload.whom].push(...cardForWhom)
        draft.cardsInGame = origin;
      }
      });
    }
    case Swap_Cards: {//обмен
      return produce(state, draft => {
        const {playerNow,idPlayerCards,whom,idWhomCards} = payload;
        console.log("cards -> playerNow", playerNow)
        console.log("cards -> state[playerNow]", state[playerNow])
        const playerSwapEl = state[playerNow].cards.filter(el=> el.id === idPlayerCards)
        const playerSwap = state[playerNow].cards.filter(el=> el.id !== idPlayerCards)
        if(idWhomCards){
          const whomSwapEl = state[whom].filter(el=> el.id === idWhomCards)
          const whomSwap = state[whom].filter(el=> el.id !== idWhomCards)
          draft[whom]=[...whomSwap,...playerSwapEl]
          draft[playerNow].cards=[...playerSwap,...whomSwapEl]
        }else{
          const origin = draft.cardsInGame
          const cardForWhom = origin.splice(0,1)
          draft.cardsInGame = [...origin,...playerSwapEl];
          draft[playerNow].cards=[...playerSwap,...cardForWhom]
        }
      });
    }
    case All_Card_Random_Update: {//randomCards && developmentCards
      return produce(state, draft => {
        const wool = new Array(15).fill('шерсть')
        const wooD = new Array(11).fill('дерево')
        const ore = new Array(16).fill('руда')
        const clay = new Array(11).fill('глина')
        const corn = new Array(14).fill('зерно')
        let cards = [...wool,...wooD,...ore,...clay,...corn]
        let cardsID = cards.map(el=>{return{name:el,id: uuid()}})
        cardsID.sort((a,b)=>{return Math.random() - 0.5 })
        draft.cardsInGame = cardsID;

        const road = new Array(9).fill('дорога')
        const knight = new Array(5).fill('рыцарь')
        const city = new Array(15).fill('город')
        const building = new Array(9).fill('здание')
        let developmentCards = [...road,...knight,...city,...building]
        let developmentCardsID = developmentCards.map(el=>{return{name:el,id: uuid()}})
        draft.developmentCards = developmentCardsID;
      });
    }
    default:
      return state;
  }
}
