export const initialState = {
    gameId:'',
    marketCards: [],
    cardsInGame: [],
    developmentCards: [],
    player1: {
      name: '',
      cards: [],
      developmentCards: [],
      countedResourcesCardsName: [],
      countedDevelopCardsParameters: [],
      points: 0
    },
    player2: {
      name: '',
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
    winner:'',
    modalNameCard: '',
  };
