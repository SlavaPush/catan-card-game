import React from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux';
const reduxCardsName = [
    'ОВЦА',
    'РУДА',
    'ДЕРЕВО',
    'ГЛИНА',
    'ЗЕРНО',
]
    const Container = styled.div`
    padding: 10px 0;
    height: 150px;
    background: #6BFFC9;
    color: white;
    display: flex;
    justify-content: space-around;
  `;
    const Card = styled.div`
    height: 150px;
    background: #FFEB5E;
    color: green;
    width: 100px;
    `;

export default function MarketCardsRow() {
    const reduxMarketCards = useSelector(state => state.cards.marketCards)
    return (
        <Container>
            {reduxMarketCards.map(card => (
                <Card>
                    {card.name}
                </Card>
            ))}
        </Container>
    )
}
