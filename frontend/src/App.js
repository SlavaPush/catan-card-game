import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import DevelopCardsRow from './components/DevelopCardsRow';
import PlayerCardsRow from './components/PlayerCardsRow';
import MarketCardsRow from './components/MarketCardsRow';
import BtnNextStep from './components/BtnNextStep';
import { useDispatch, useSelector } from 'react-redux';
import { allCardRandomUpdate, giveCards, setReceivedCardsState } from './Redux/actions';
import SidebarCounter from './components/SidebarCounter';
import {sagaStateTransfer, sagaSearchStateInRoom} from './Redux/saga/saga-actions';
// import {sagaMiddleware} from './Redux/store';
// import setupSocket from './sockets/socket';
// import sagaWatcher from './Redux/saga/saga-watcher';
// import { socketVadim } from './socketVadim';////   для отладки логики


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

function App({match, history, location}) {
  // const id = useSelector(state => state.cards.gameId);

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
    </MainContainer>
  );
}

export default App;

