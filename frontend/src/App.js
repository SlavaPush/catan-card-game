import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import DevelopCardsRow from './components/DevelopCardsRow';
import PlayerCardsRow from './components/PlayerCardsRow';
import MarketCardsRow from './components/MarketCardsRow';
import BtnNextStep from './components/BtnNextStep';
import { useDispatch } from 'react-redux';
import { allCardRandomUpdate, giveCards } from './Redux/actions';
import SidebarCounter from './components/SidebarCounter';

const MainContainer = styled.div`
    display: flex;
    max-width: 1500px;
    margin: 0 auto;
  `
const ContainerPlayField = styled.div`
    background: #925BFF;
    color: white;
    width: 80rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  `;
const ContainerControlPanel = styled.div`
    background-color: grey;
    height: 100vh;
    flex-basis:300px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  `

function App() {
  const dispatch = useDispatch()
  
  const startGame = useCallback(() => {
    dispatch(allCardRandomUpdate())
    dispatch(giveCards(5, "cards", 'player1'))
    dispatch(giveCards(5, "cards", 'player2'))
    dispatch(giveCards(5, "marketCards"))
  }, [dispatch])

  useEffect(() => {
    startGame()
  }, [startGame])

  return (
    <MainContainer>
      <ContainerPlayField >
        <DevelopCardsRow />
        <MarketCardsRow />
        <PlayerCardsRow />
      </ContainerPlayField>
      <ContainerControlPanel>
        <BtnNextStep />
        <SidebarCounter/>
      </ContainerControlPanel>
    </MainContainer>
  );
}

export default App;

