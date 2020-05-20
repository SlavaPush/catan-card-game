import React, { useEffect, useCallback } from 'react';
import DevelopCardsRow from './components/DevelopCardsRow';
import PlayerCardsRow from './components/PlayerCardsRow';
import MarketCardsRow from './components/MarketCardsRow';
import BtnNextStep from './components/BtnNextStep';
import { useDispatch, useSelector } from 'react-redux';
import { allCardRandomUpdate, giveCards } from './Redux/actions';
import SidebarCounter from './components/SidebarCounter';
import {
  MainContainer,
   ContainerPlayField, 
   ContainerControlPanel} from './components/CommonStyledComponents/ScApp'


function App() {
  const dispatch = useDispatch()
  const player1 = useSelector(state => state.cards.player1.name)
  const state = useSelector(state => state)
  
  localStorage.setItem('player', 'player1');
  const startGame = useCallback(() => {
    dispatch(allCardRandomUpdate())
    dispatch(giveCards(5, "cards", 'player1'))
    dispatch(giveCards(5, "cards", 'player2'))
    dispatch(giveCards(5, "marketCards"))
  }, [dispatch])
  useEffect(() => {
    startGame()
  }, [startGame,])

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

