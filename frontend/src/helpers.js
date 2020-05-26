export const stepCheck = (playerNow) => {
    const player = localStorage.getItem('player')
    if (player === playerNow) return true
    else return false
}
export const allActiveCheck = (...args) => {
    return args.reduce((res, arg) => {
        if (res && arg) return true
        else return false
    })
}

export const countCards = (cards) => {
    return cards.reduce((final, card) => {
        const index = final.findIndex(arr => arr[0].name === card.name)
        if (index >= 0) {
            final[index].push(card)
            return final
        } else {
            final.push([card])
            return final
        }
    }, [])
}
export const actionCardModifications = {
    'дорога': () => { },
    'рыцарь': (countedDevelopCardsParameters, dispatch, { giveCards }, playerNow) => {
        const numberOfCards = countedDevelopCardsParameters.find(cards => cards[0].name === 'рыцарь')
        if (numberOfCards.length > 3) dispatch(giveCards(1, "cards", playerNow))
        if (numberOfCards.length >= 1) dispatch(giveCards(1, "cards", playerNow))
    },
    'город': (countedDevelopCardsParameters, dispatch, { sagaCityLogic }, playerNow) => {
      const numberOfCards = countedDevelopCardsParameters.find(cards => cards[0].name === 'город')
      if (numberOfCards.length === 1) dispatch(sagaCityLogic(playerNow,'One')) 
      if (numberOfCards.length === 2) dispatch(sagaCityLogic(playerNow,'Two')) 
     },
    'здание': (countedDevelopCardsParameters, dispatch, { sagaRemoveOpponentCard }, playerNow) => { 
      const numberOfCards = countedDevelopCardsParameters.find(cards => cards[0].name === 'здание')
      if (numberOfCards.length >= 1) dispatch(sagaRemoveOpponentCard(playerNow))
      if (numberOfCards.length >= 2) dispatch(sagaRemoveOpponentCard(playerNow))
      if (numberOfCards.length >= 3) dispatch(sagaRemoveOpponentCard(playerNow))
    },
}

export const selectCheck = (parameter, arrayCards) => {
    return arrayCards.some(card => card.name === parameter || card.id === parameter)
}

export const isItEnoughResources = (name, countedResourcesCardsName) => {

    const resources = countedResourcesCardsName.reduce((resources, cards) => {
        resources[cards[0].name] = cards.length
        return resources
    }, {})

    const prices = {
        'дорога': {
            'дерево': 1,
            'глина': 0,
        },
        'рыцарь': {
            'зерно': 1,
            'шерсть': 1,
            'руда': 1,
        },
        'город': {
            'зерно': 2,
            'руда': 3,
        },
        'здание': {
            'руда': 1,
            'шерсть': 3,
        },
    }
    for (let requiredResource in prices[name]) {
        if (prices[name][requiredResource] > resources[requiredResource] ||
            resources[requiredResource] === undefined) return false
    }
    return true
}
export const cardsPhotos = {
    'дорога': 'road',
    'рыцарь': 'knight',
    'город': 'city',
    'здание': 'house',
    'шерсть': 'ship',
    'дерево': 'wood',
    'руда': 'ore',
    'глина': 'clay',
    'зерно': 'corn',
}

export function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
