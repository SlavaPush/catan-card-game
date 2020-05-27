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
      points: 0,
      cityLogic:{
        Two:false,
        Four:false,
      },
    },
    player2: {
      name: '',
      cards: [],
      developmentCards: [],
      countedResourcesCardsName: [],
      countedDevelopCardsParameters: [],
      points: 0,
      cityLogic:{
        One:false,
        Two:false,
      },
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
