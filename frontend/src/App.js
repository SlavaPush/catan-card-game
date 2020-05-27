
import React, { useEffect } from 'react';
import { useParams  } from "react-router-dom";
import DevelopCardsRow from './components/DevelopCardsRow';
import PlayerCardsRow from './components/PlayerCardsRow';
import MarketCardsRow from './components/MarketCardsRow';
import { useDispatch, useSelector } from 'react-redux';
import { changemodalNameCard, setReceivedCardsState } from './Redux/actions';
import SidebarCounter from './components/SidebarCounter';
import { sagaStateTransfer, sagaSearchStateInRoom } from './Redux/saga/saga-actions';
import Modal from './components/Modal'
import {reactLocalStorage} from 'reactjs-localstorage';

import {
  MainContainer,
  ContainerPlayField,
  ContainerControlPanel,
} from "./components/CommonStyledComponents/ScApp";

function App() {
  const modalNameCard = useSelector((state) => state.cards.modalNameCard);
  const state = useSelector((state) => state.cards);
  const { player, id } = useParams();
  const dispatch = useDispatch();

  if (player) {
    localStorage.setItem("player", player);
  }

  useEffect(() => {
    if (player === 'player1') {
    if (state.gameId === '') {// experiment
      dispatch(setReceivedCardsState(reactLocalStorage.getObject('stateLS', state )))
    }else{
      dispatch(sagaStateTransfer(id, state))
      dispatch(changemodalNameCard('urlPl2')) 
      reactLocalStorage.setObject('stateLS', state )
    }      
    }
  }, [dispatch]);

  useEffect(() => {
    if (player === "player2") {
      dispatch(sagaSearchStateInRoom(id));
    }
  }, [dispatch]);

  return (
    <MainContainer>
      <ContainerPlayField>
        <DevelopCardsRow />
        <MarketCardsRow />
        <PlayerCardsRow />
      </ContainerPlayField>
      <ContainerControlPanel>
        <SidebarCounter />
      </ContainerControlPanel>
      <Modal
        isShow={modalNameCard}
        onCancel={() => dispatch(changemodalNameCard())}
      />
    </MainContainer>
  );
}

export default App;
