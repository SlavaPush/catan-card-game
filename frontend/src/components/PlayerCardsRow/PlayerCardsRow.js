import React from 'react'
import styled from 'styled-components';
import { DevelopCardsParameters } from '../DevelopCardsRow/CardsParameters'
import { useSelector, useDispatch } from 'react-redux';
import { setTotalCount } from '../../Redux/actions';

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

export default function MarketCardsRow() {
    const reduxResourcesCardsName = useSelector(state => state.cards.player1.cards)
    const DevelopCardsParameters = useSelector(state => state.cards.player1.developmentCards)
    const oldTotalPoints = useSelector(state => state.cards.player1.points)
    const dispatch = useDispatch()
    const countedResourcesCardsName = reduxResourcesCardsName.
        reduce((final, card) => {
            const index = final.findIndex(arr => arr[0].name === card.name)
            if (index >= 0) {
                final[index].push(card)
                return final
            } else {
                final.push([card])
                return final
            }
        }, []).
        sort((a, b) => {
            if (a[0].name < b[0].name) return -1;
            if (a[0].name > b[0].name) return 1;
            return 0;
        })

        const newTotalPoints = DevelopCardsParameters.reduce((sum, card) =>{
            return sum + (Math.floor(card.number * card.points))
        }, 0)

        if (newTotalPoints !== oldTotalPoints) dispatch(setTotalCount(newTotalPoints))

    return (
        <Container>
            <ContainerTitleAndCards>
                <Title>
                    Постройки
                </Title>
                <ContainerPart>
                    {DevelopCardsParameters.map(card => (
                        <Card>
                            {card.name}
                            <br />
                            Штук: {card.number}
                            <br />
                            Очков: {Math.floor(card.number * card.points)}
                        </Card>
                    ))}
                </ContainerPart>
            </ContainerTitleAndCards>
            <ContainerTitleAndCards>
                <Title>
                    Ресурсы
                </Title>
                <ContainerPart>
                    {countedResourcesCardsName.map(card => (
                        <Card>
                            {card[0].name}
                            <br />
                            {card.length}
                        </Card>
                    ))}
                </ContainerPart>
            </ContainerTitleAndCards>
        </Container>
    )
}
