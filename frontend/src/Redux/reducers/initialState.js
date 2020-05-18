export const initialState = {
    marketCards: [],
    cardsInGame: [],
    developmentCards: [],
    player1: {
      name: 'Петя',
      cards: [],
      developmentCards: [],
      countedResourcesCardsName: [],
      countedDevelopCardsParameters: [],
      points: 0
    },
    player2: {
      name: 'Вася',
      cards: [],
      developmentCards: [],
      countedResourcesCardsName: [],
      countedDevelopCardsParameters: [],
      points: 0
    },
    exchangeTempleBuffer: {
      takeCard: '',
      giveCard: '',
      source: ''
    },
    buyTempleBuffer: {
      takeCard: '',
    },
    step: false,
    playerNow: 'player1',
  };