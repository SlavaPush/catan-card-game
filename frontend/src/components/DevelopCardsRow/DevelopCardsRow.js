import React from 'react'
import styled from 'styled-components';
import { DevelopCardsParameters } from './CardsParameters'
import Card from '../Card'
import CardResources from '../CardResources'

const Container = styled.div`
    padding: 10px 0;
    height: 150px;
    background: #85E856;
    color: white;
    display: flex;
    justify-content: space-around;
  `;


export default function DevelopCardRow() {

    return (
        <Container>
            {DevelopCardsParameters.map(card => (
                <Card key={card.id} card={card} />
            ))}
            <CardResources />
        </Container>
    )
}
