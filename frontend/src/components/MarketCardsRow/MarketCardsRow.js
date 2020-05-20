import React from 'react'
import { useSelector } from 'react-redux';
import CardMarket from '../CardMarket/CardMarket';
import { stepCheck, allActiveCheck } from '../../helpers';
import {Container} from './ScMarketCardsRow'


export default function MarketCardsRow() {
    const marketStep = useSelector(state => !state.cards.step)
    const playerNow = useSelector(state => state.cards.playerNow)
    const reduxMarketCards = useSelector(state => state.cards.marketCards)

    const marketAvailable = useSelector(state => {
        const index = state.cards[playerNow].developmentCards.findIndex(card => {
            if (card.name === 'дорога') return true
            return false
        })
        if (index >= 0) return true
        return false
    })

    const reduxMarketCardsElements = reduxMarketCards.map(card => (
        <CardMarket {...{
            card,
            key: card.id,
            allActive: allActiveCheck(
                marketStep,
                marketAvailable,
                stepCheck(playerNow),
            )
        }}
        />))

    return (
        <Container>
            {reduxMarketCardsElements}
        </Container>
    )
}
