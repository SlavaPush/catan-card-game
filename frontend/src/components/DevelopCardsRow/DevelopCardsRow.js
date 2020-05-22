import React from 'react'
import Card from '../Card'
import CardResources from '../CardResources'
import { useSelector } from 'react-redux';
import { stepCheck, allActiveCheck, isItEnoughResources, selectCheck } from '../../helpers';
import {Container} from './ScDevelopCardsRow'


export default function DevelopCardRow() {

    const marketStep = useSelector(state => state.cards.step)
    const playerNow = useSelector(state => state.cards.playerNow)
    const reduxDevelopmentCards = useSelector(state => state.cards.developmentCards)
    const countedResourcesCardsName = useSelector(state => state.cards[playerNow].countedResourcesCardsName)
    const takeCard = useSelector(state => state.cards.buyTempleBuffer.takeCard)

    const countedDevelopmentCards = reduxDevelopmentCards.reduce((final, card) => {
        const index = final.findIndex(arr => arr[0].name === card.name)
        if (index >= 0) {
            final[index].push(card)
            return final
        } else {
            final.push([card])
            return final
        }
    }, [])



    const countedDevelopmentCardsElements = countedDevelopmentCards.map(card => (
        <Card
            {...{
                card,
                countedResourcesCardsName,
                key: card[0].id,
                console: console.log(
                    marketStep,
                    stepCheck(playerNow),
                    isItEnoughResources(
                        card[0].name,
                        countedResourcesCardsName)
                ),
                allActive: allActiveCheck(
                    marketStep,
                    stepCheck(playerNow),
                    isItEnoughResources(
                        card[0].name,
                        countedResourcesCardsName)),
                selected: selectCheck(takeCard, card),
            }}
        />
    ))

    return (
        <Container>
            {countedDevelopmentCardsElements}
            <CardResources />
        </Container>
    )
}

