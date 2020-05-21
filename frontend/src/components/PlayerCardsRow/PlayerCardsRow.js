import React, { useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setTotalCount, setCounterResourcesCardName, setCounterDevelopCardsParameters } from '../../Redux/actions';
import PlayerCardResources from '../PlayerCardResources';
import PlayerCardDevelopment from '../PlayerCardDevelopment';
import { stepCheck, countCards, allActiveCheck } from '../../helpers';
import { Container, ContainerPart, ContainerTitleAndCardsDev, ContainerTitleAndCardsRes, Title} from './ScPlayerCardsRow';

export default function PlayerCardsRow() {
    const dispatch = useDispatch()
    const player = localStorage.getItem('player')
    const playerNow = useSelector(state => state.cards.playerNow)
    const oldTotalPoints = useSelector(state => state.cards[player].points)
    const reduxResourcesCardsName = useSelector(state => state.cards[player].cards)
    const developCardsParameters = useSelector(state => state.cards[player].developmentCards)
    const marketStep = useSelector(state => !state.cards.step)
    const countedResourcesCardsName = useMemo(() => countCards(reduxResourcesCardsName), [reduxResourcesCardsName])
    const countedDevelopCardsParameters = useMemo(() => countCards(developCardsParameters), [developCardsParameters])

    const allActive = allActiveCheck(stepCheck(playerNow), marketStep)
    const newTotalPoints = countedDevelopCardsParameters.reduce((sum, card) => {
        return sum + (Math.floor(card.length * card[0].point))
    }, 0)

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

    return (
        <Container>
            <ContainerTitleAndCardsDev>
                <Title>
                    Постройки
                </Title>
                <ContainerPart>
                    {countedDevelopCardsParameters.map(card => (
                        <PlayerCardDevelopment
                            {...{
                                card,
                                key: card[0].name,
                                allActive: stepCheck(playerNow),
                            }}
                        />
                    ))}
                </ContainerPart>
            </ContainerTitleAndCardsDev>
            <ContainerTitleAndCardsRes>
                <Title>
                    Ресурсы
                </Title>
                <ContainerPart>
                    {countedResourcesCardsName.map(card => (
                        <PlayerCardResources {...{
                            allActive,
                            key: card[0].id,
                            card
                        }} />
                    ))}
                </ContainerPart>
            </ContainerTitleAndCardsRes>
        </Container>
    )
}
