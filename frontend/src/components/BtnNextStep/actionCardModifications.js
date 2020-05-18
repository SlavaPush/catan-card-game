
export const actionCardModifications = {
    'дорога': () => { },
    'рыцарь': (countedDevelopCardsParameters, dispatch, { giveCards }, playerNow) => {
        const numberOfCards = countedDevelopCardsParameters.find(cards => cards[0].name === 'рыцарь')
        if (numberOfCards.length > 3) dispatch(giveCards(1, "cards", playerNow))
        if (numberOfCards.length >= 1) dispatch(giveCards(1, "cards", playerNow))
    },
    'город': [() => { }],
    'здание': [() => { }],
}