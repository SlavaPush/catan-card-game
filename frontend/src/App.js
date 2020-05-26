import React, { useEffect, useCallback } from 'react';
import DevelopCardsRow from './components/DevelopCardsRow';
import PlayerCardsRow from './components/PlayerCardsRow';
import MarketCardsRow from './components/MarketCardsRow';
import BtnNextStep from './components/BtnNextStep';
import Chat from './components/Chat';
import { useDispatch, useSelector } from 'react-redux';
import { allCardRandomUpdate, giveCards, changemodalNameCard } from './Redux/actions';
import SidebarCounter from './components/SidebarCounter';
import { sagaStateTransfer, sagaSearchStateInRoom } from './Redux/saga/saga-actions';
import Modal from './components/Modal'

import {
  MainContainer,
  ContainerPlayField, 
  ContainerControlPanel
  } from './components/CommonStyledComponents/ScApp'

function App({ match }) {
  const modalNameCard = useSelector(state => state.cards.modalNameCard)

  const dispatch = useDispatch()
  if (match.params.player) {
    localStorage.setItem('player', match.params.player);
  }

  const state = useSelector(state => state.cards);

  useEffect(() => {
    if (match.params.player === 'player1') {
      dispatch(sagaStateTransfer(match.params.id, state))
      dispatch(changemodalNameCard('urlPl2')) 
    }

  }, [dispatch]);

  useEffect(() => {
    if (match.params.player === 'player2') {
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
        <SidebarCounter  />
      </ContainerControlPanel>
      <Modal isShow={modalNameCard} onCancel={() => dispatch(changemodalNameCard())} />
    </MainContainer>
  );
}

export default App;

