import React, { useEffect, useCallback } from 'react';
import DevelopCardsRow from './components/DevelopCardsRow';
import PlayerCardsRow from './components/PlayerCardsRow';
import MarketCardsRow from './components/MarketCardsRow';
import BtnNextStep from './components/BtnNextStep';
import Chat from './components/Chat';
import { useDispatch, useSelector } from 'react-redux';
import { allCardRandomUpdate, giveCards } from './Redux/actions';
import SidebarCounter from './components/SidebarCounter';
import {sagaStateTransfer, sagaSearchStateInRoom} from './Redux/saga/saga-actions';


import {
  MainContainer,
  ContainerPlayField, 
  ContainerControlPanel
  } from './components/CommonStyledComponents/ScApp'


function App({match}) {
  const dispatch = useDispatch()
  if(match.params.player){
    localStorage.setItem('player', match.params.player);
  }
  const urlPl2 = `http://localhost:3000/${match.params.id}/player2`
  

    const state = useSelector(state => state.cards);

    useEffect(() => {
  if (match.params.player === 'player1'){
    dispatch(sagaStateTransfer(match.params.id, state))
  }
      
    }, [dispatch]);

    useEffect(() => {
      if(match.params.player === 'player2'){
        dispatch(sagaSearchStateInRoom(match.params.id));
      }
    }, [dispatch]);

  return (
    <MainContainer>
      <ContainerPlayField >
        <DevelopCardsRow />
        <MarketCardsRow />
        <PlayerCardsRow />
      </ContainerPlayField>
      <ContainerControlPanel>
        <BtnNextStep />
        <SidebarCounter urlPl2={urlPl2}/>
      </ContainerControlPanel>
      <Chat />
    </MainContainer>
  );
}

export default App;

