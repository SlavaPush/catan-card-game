
import produce from "immer";
import { v4 as uuid } from 'uuid';
import { initialState } from "./initialState";
import {
  /* ERROR ,*/
  GIVE_CARDS,
  SWAP_CARDS,
  STEP_CHANGE,
  SET_TOTAL_COUNT,
  BUY_DEVELOPMENT_CARDS,
  All_CARD_RANDOM_UPDATE,
  SET_COUNTER_DEVELOP_CARDS_PARAMETERS,
  SET_COUNTER_RESOURCES_CARD_NAME,
  TAKE_CARD_FROM_MARKET_TO_TEMPLE_BUFFER,
  TAKE_CARD_FROM_RESOURCES_TO_TEMPLE_BUFFER,
  TAKE_CARD_FROM_PLAYER_RESOURCES_TO_TEMPLE_BUFFER,
} from "../types";

export default function cards(state = initialState, { type, payload }) {
  switch (type) {
    case SET_COUNTER_DEVELOP_CARDS_PARAMETERS: {
      return produce(state, draft => {
        draft[draft.playerNow].countedDevelopCardsParameters = payload
      });
    }
    case SET_COUNTER_RESOURCES_CARD_NAME: {
      return produce(state, draft => {
        draft[draft.playerNow].countedResourcesCardsName = payload
      });
    }
    case TAKE_CARD_FROM_RESOURCES_TO_TEMPLE_BUFFER: {
      return produce(state, draft => {
        draft.exchangeTempleBuffer.takeCard = draft.cardsInGame[0]
        draft.exchangeTempleBuffer.source = 'cardsInGame'
      });
    }
    case TAKE_CARD_FROM_MARKET_TO_TEMPLE_BUFFER: {
      return produce(state, draft => {
        const index = draft.marketCards.findIndex(card => {
          if (card.id === payload) return true
          else return false
        })
        draft.exchangeTempleBuffer.source = 'marketCards'
        draft.exchangeTempleBuffer.takeCard = draft.marketCards[index]
      });
    }
    case TAKE_CARD_FROM_PLAYER_RESOURCES_TO_TEMPLE_BUFFER: {
      return produce(state, draft => {
        const index = draft[draft.playerNow].cards.findIndex(card => {
          if (card.id === payload) return true
          else return false
        })
        draft.exchangeTempleBuffer.giveCard = draft[draft.playerNow].cards[index]
      });
    }
    case GIVE_CARDS: {
      // Отдает карты
      return produce(state, draft => {
        const origin = draft.cardsInGame
        const cardForWhom = origin.splice(0, payload.num)
        const player = payload.player || false
        if (player) {
          draft[payload.player][payload.whom].push(...cardForWhom)
          draft.cardsInGame = origin;
        } else {
          draft[payload.whom].push(...cardForWhom)
          draft.cardsInGame = origin;
        }
      });
    }
    case SWAP_CARDS: {
      //обмен
      return produce(state, draft => {
        const { takeCard, giveCard, source } = state.exchangeTempleBuffer
        if (takeCard && giveCard) {
          draft[draft.playerNow].cards.forEach((card, indx) => {
            if (card.id === giveCard.id) draft[draft.playerNow].cards[indx] = takeCard
          })
          draft[source].forEach((card, indx) => {
            if (card.id === takeCard.id) {
              if (source === 'marketCards') draft.marketCards[indx] = giveCard
              else draft.cardsInGame[draft.cardsInGame.length] = giveCard
            }
          });
          draft.exchangeTempleBuffer.takeCard = ''
          draft.exchangeTempleBuffer.giveCard = ''
          draft.exchangeTempleBuffer.source = ''
        } else return state
      })
    }

    case BUY_DEVELOPMENT_CARDS: {
      //покупка карт развития
      return produce(state, draft => {
        const { developmentCardName } = payload;
        const developmentCardNow = state.developmentCards.filter(e => e.name === developmentCardName).splice(0, 1)
        if (developmentCardName === 'дорога') {
          const arrWood = state[state.playerNow].cards.filter(e => e.name === 'дерево').splice(0, 1)
          const arrClay = state[state.playerNow].cards.filter(e => e.name === 'глина').splice(0, 1)
          draft[state.playerNow].cards = state[state.playerNow].cards.filter(e => e.id !== arrClay[0].id && e.id !== arrWood[0].id)
          draft.cardsInGame.push(...arrWood, ...arrClay)
          draft[state.playerNow].points += developmentCardNow[0].point
          draft[state.playerNow].developmentCards.push(...developmentCardNow)
          draft.developmentCards = state.developmentCards.filter(el => el.id !== developmentCardNow[0].id)
        }
        else if (developmentCardName === 'рыцарь') {
          const cornWood = state[state.playerNow].cards.filter(e => e.name === 'зерно').splice(0, 1)
          const woolClay = state[state.playerNow].cards.filter(e => e.name === 'шерсть').splice(0, 1)
          const oreClay = state[state.playerNow].cards.filter(e => e.name === 'руда').splice(0, 1)
          draft[state.playerNow].cards = state[state.playerNow].cards.filter((e) => {
            return e.id !== cornWood[0].id && e.id !== woolClay[0].id && e.id !== oreClay[0].id
          })
          draft.cardsInGame.push(...cornWood, ...woolClay, ...oreClay)
          draft[state.playerNow].developmentCards.push(...developmentCardNow)
          draft.developmentCards = state.developmentCards.filter(el => el.id !== developmentCardNow[0].id)
        }
        else if (developmentCardName === 'город') {
          const cornWood = state[state.playerNow].cards.filter(e => e.name === 'зерно').splice(0, 2)
          const oreClay = state[state.playerNow].cards.filter(e => e.name === 'руда').splice(0, 3)
          draft[state.playerNow].cards = state[state.playerNow].cards.filter((e) => {
            return e.id !== cornWood[0].id && e.id !== cornWood[1].id && e.id !== oreClay[0].id &&
              e.id !== oreClay[1].id && e.id !== oreClay[2].id
          })
          draft.cardsInGame.push(...cornWood, ...oreClay)
          draft[state.playerNow].developmentCards.push(...developmentCardNow)
          draft[state.playerNow].points += developmentCardNow[0].point
          draft.developmentCards = state.developmentCards.filter(el => el.id !== developmentCardNow[0].id)
        }
        else if (developmentCardName === 'здание') {
          const oreClay = state[state.playerNow].cards.filter(e => e.name === 'руда').splice(0, 1)
          const woolClay = state[state.playerNow].cards.filter(e => e.name === 'шерсть').splice(0, 3)
          draft[state.playerNow].cards = state[state.playerNow].cards.filter((e) => {
            return e.id !== oreClay[0].id && e.id !== woolClay[0].id &&
              e.id !== woolClay[1].id && e.id !== woolClay[2].id
          })
          draft.cardsInGame.push(...oreClay, ...woolClay)
          draft[state.playerNow].developmentCards.push(...developmentCardNow)
          draft[state.playerNow].points += developmentCardNow[0].point
          draft.developmentCards = state.developmentCards.filter(el => el.id !== developmentCardNow[0].id)
        }
      });
    }
    case All_CARD_RANDOM_UPDATE: {
      //randomCards && developmentCards
      return produce(state, draft => {
        const wool = new Array(15).fill('шерсть')
        const wooD = new Array(11).fill('дерево')
        const ore = new Array(16).fill('руда')
        const clay = new Array(11).fill('глина')
        const corn = new Array(14).fill('зерно')
        let cards = [...wool, ...wooD, ...ore, ...clay, ...corn]
        let cardsID = cards.map(el => { return { name: el, id: uuid() } })
        cardsID.sort((a, b) => { return Math.random() - 0.5 })
        draft.cardsInGame = cardsID;

        const road = new Array(9).fill('дорога')
        const knight = new Array(5).fill('рыцарь')
        const city = new Array(15).fill('город')
        const building = new Array(9).fill('здание')
        const roadPoints = road.map(el => { return { name: el, id: uuid(), point: 1 } })
        const cityPoints = city.map(el => { return { name: el, id: uuid(), point: 2 } })
        const buildingPoints = building.map(el => { return { name: el, id: uuid(), point: 3 } })
        const knightID = knight.map(el => { return { name: el, id: uuid(), point: 0 } })
        const developmentCards = [...roadPoints, ...cityPoints, ...buildingPoints, ...knightID]
        draft.developmentCards = developmentCards;
      });
    }
    case SET_TOTAL_COUNT: {
      return produce(state, draft => {
        draft[payload.player].points = payload.totalCount
      })
    }
    case STEP_CHANGE: {
      return produce(state, draft => {
        if (!state.step) draft.step = true
        else {
          if (state.playerNow === 'player1') {
            draft.playerNow = 'player2';
            draft.step = false
          } else {
            draft.playerNow = 'player1';
            draft.step = false
          }
        }
      });
    }
    default:
      return state;
  }
}
