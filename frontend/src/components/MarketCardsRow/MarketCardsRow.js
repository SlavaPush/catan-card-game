import React from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import CardMarket from '../CardMarket/CardMarket';

const Container = styled.div`
    padding: 10px 0;
    height: 150px;
    background: #6BFFC9;
    color: white;
    display: flex;
    justify-content: space-around;
  `;


export default function MarketCardsRow() {
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

    return (
        <Container>
            {reduxMarketCards.map(card => (
                <CardMarket key={card.id} {...card} marketAvailable = {marketAvailable}/>))}
        </Container>
    )
}
