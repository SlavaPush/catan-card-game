import React from 'react'
import styled from 'styled-components';
import Card from '../Card'
import CardResources from '../CardResources'
import { useSelector } from 'react-redux';
import { isItEnoughResources } from './isItEnoughResources';
import { stepCheck } from '../../helpers';


const Container = styled.div`
    padding: 10px 0;
    height: 150px;
    background: #85E856;
    color: white;
    display: flex;
    justify-content: space-around;
  `;

export default function DevelopCardRow() {
    const marketStep = useSelector(state => state.cards.step)
    const playerNow = useSelector(state => state.cards.playerNow)
    const reduxDevelopmentCards = useSelector(state => state.cards.developmentCards)
    const countedResourcesCardsName = useSelector(state => state.cards[playerNow].countedResourcesCardsName)
    // logic check
    const isActiveStep = stepCheck(playerNow)
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

    const resources = {}
    countedResourcesCardsName.forEach(cards => {
        resources[cards[0].name] = cards.length
    })
    return (
        <Container>
            {countedDevelopmentCards.map(card => (
                <Card
                    key={card[0].id}
                    card={card}
                    countedResourcesCardsName={countedResourcesCardsName}
                    isActive={isItEnoughResources(card[0].name, resources)}
                    marketStep={marketStep}
                    isActiveStep ={isActiveStep}
                />
            ))}
            <CardResources />
        </Container>
    )
}
