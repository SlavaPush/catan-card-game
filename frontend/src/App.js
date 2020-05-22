import React, { useEffect, useCallback } from 'react';
import { useParams  } from "react-router-dom";
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

function App() {
  const modalNameCard = useSelector(state => state.cards.modalNameCard);
  const {player, id} = useParams();

  const dispatch = useDispatch()
  if (player) {
    localStorage.setItem('player', player);
  }
  const urlPl2 = `http://localhost:3000/${id}/player2`


  const state = useSelector(state => state.cards);

  useEffect(() => {
    if (player === 'player1') {
      dispatch(sagaStateTransfer(id, state))
    }

  }, [dispatch]);

  useEffect(() => {
    if (player === 'player2') {
      dispatch(sagaSearchStateInRoom(id));
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
        <SidebarCounter urlPl2={urlPl2} />
      </ContainerControlPanel>
      <Modal isShow={modalNameCard} onCancel={() => dispatch(changemodalNameCard())} />
      <Chat />
    </MainContainer>
  );
}

export default App;

