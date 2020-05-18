import React, { useEffect } from 'react'
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setTotalCount, setCounterResourcesCardName, setCounterDevelopCardsParameters } from '../../Redux/actions';
import PlayerCardResources from '../PlayerCardResources';
import PlayerCardDevelopment from '../PlayerCardDevelopment';

const Container = styled.div`
    padding: 10px 0;
    background: #56A0E8;
    color: white;
    display: flex;
    justify-content: space-around;
  `;
const ContainerPart = styled.div`
    height: 180px;
    background: #56A0E8;
    color: green;
    width: 100%;
    display: flex;
    justify-content: space-around;
    `;
const ContainerTitleAndCards = styled.div`
    width: 100%;
    `;
const Card = styled.div`
    height: 150px;
    background: #FFEB5E;
    color: green;
    width: 100px;
    `;
const Title = styled.div`
    color: white;
    font-size: 2rem;
    text-align: center;
    padding: 10px 0;
    `
const countCards = (cards) => {
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
export default function PlayerCardsRow() {
    const dispatch = useDispatch()
    const playerNow = useSelector(state => state.cards.playerNow)
    const oldTotalPoints = useSelector(state => state.cards[playerNow].points)
    const reduxResourcesCardsName = useSelector(state => state.cards[playerNow].cards)
    const developCardsParameters = useSelector(state => state.cards[playerNow].developmentCards)

    const countedResourcesCardsName = countCards(reduxResourcesCardsName)
    const countedDevelopCardsParameters = countCards(developCardsParameters)

    const newTotalPoints = countedDevelopCardsParameters.reduce((sum, card) => {
        return sum + (Math.floor(card.length * card[0].point))
    }, 0)
    // useEffect Требуется для разрешения ошибки, возникающий 
    // при изменении стейта одновремнно с другим компонентом
    useEffect(() => {
        if (newTotalPoints !== oldTotalPoints) dispatch(setTotalCount(newTotalPoints, playerNow))
        dispatch(setCounterResourcesCardName(countedResourcesCardsName))
        dispatch(setCounterDevelopCardsParameters(countedDevelopCardsParameters))
    }, [newTotalPoints,
        oldTotalPoints,
        countedResourcesCardsName,
        countedDevelopCardsParameters,
        playerNow,
        dispatch,])
    console.log('developCardsParameters', countedDevelopCardsParameters)
    return (
        <Container>
            <ContainerTitleAndCards>
                <Title>
                    Постройки
                </Title>
                <ContainerPart>
                    {countedDevelopCardsParameters.map(card => (
                        <PlayerCardDevelopment
                            {...card}
                            key={card[0].name}
                            number={card.length} />
                    ))}
                </ContainerPart>
            </ContainerTitleAndCards>
            <ContainerTitleAndCards>
                <Title>
                    Ресурсы
                </Title>
                <ContainerPart>
                    {countedResourcesCardsName.map(card => (
                        <PlayerCardResources
                            {...card}
                            key={card[0].id}
                            number={card.length} />
                    ))}
                </ContainerPart>
            </ContainerTitleAndCards>
        </Container>
    )
}
