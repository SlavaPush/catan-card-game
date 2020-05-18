
import {
  ERROR,
  GIVE_CARDS,
  SWAP_CARDS,
  STEP_CHANGE,
  SET_TOTAL_COUNT,
  BUY_DEVELOPMENT_CARDS,
  All_CARD_RANDOM_UPDATE,
  SET_COUNTER_RESOURCES_CARD_NAME,
  SET_COUNTER_DEVELOP_CARDS_PARAMETERS,
  TAKE_CARD_FROM_MARKET_TO_TEMPLE_BUFFER,
  TAKE_CARD_FROM_RESOURCES_TO_TEMPLE_BUFFER,
  TAKE_CARD_FROM_PLAYER_RESOURCES_TO_TEMPLE_BUFFER,
  TAKE_CARD_FROM_DEVELOPMENT_CARDS_TO_TEMPLE_BUFFER,
} from "./types";


export const takeCardFromDevelopmentCardsToTempleBuffer = (nameCard) => {
  return {
    type: TAKE_CARD_FROM_DEVELOPMENT_CARDS_TO_TEMPLE_BUFFER,
    payload: nameCard,
  };
};
export const setCounterResourcesCardName = (counter) => {
  return {
    type: SET_COUNTER_RESOURCES_CARD_NAME,
    payload: counter,
  };
};
export const setCounterDevelopCardsParameters = (counter) => {
  return {
    type: SET_COUNTER_DEVELOP_CARDS_PARAMETERS,
    payload: counter,
  };
};

export const takeCardFromResourcesToTempleBuffer = () => {
  return { type: TAKE_CARD_FROM_RESOURCES_TO_TEMPLE_BUFFER, };
};

export const takeCardFromMarketToTempleBuffer = (id) => {
  return {
    type: TAKE_CARD_FROM_MARKET_TO_TEMPLE_BUFFER,
    payload: id,
  };
};

export const takeCardFromPlayerResourcesToTempleBuffer = (id) => {
  return {
    type: TAKE_CARD_FROM_PLAYER_RESOURCES_TO_TEMPLE_BUFFER,
    payload: id,
  };
};

export const allCardRandomUpdate = () => {
  return { type: All_CARD_RANDOM_UPDATE, };
};

export const giveCards = (num, whom, player) => {
  // (num - сколько карт, whom - куда, строкой, player? - если игроку)
  return {
    type: GIVE_CARDS,
    payload: {
      num,
      whom,
      player
    },
  };
};

export const swapCards = () => {
  return { type: SWAP_CARDS, };
};

export const buyDevelopmentCards = (developmentCardName) => {
  return {
    type: BUY_DEVELOPMENT_CARDS,
    payload: {
      developmentCardName,
    },
  };
};

export const changeStep = () => {
  return { type: STEP_CHANGE };
};

export const setTotalCount = (totalCount, player) => {
  return {
    type: SET_TOTAL_COUNT,
    payload: {
      player,
      totalCount,
    }
  }
}

////////////////////ERROR NOT READY
export const error = (err) => {
  return {
    type: ERROR,
    payload: err,
  };
};

