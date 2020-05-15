import React from 'react';
import styled from 'styled-components';
import DevelopCardsRow from './components/DevelopCardsRow';
import PlayerCardsRow from './components/PlayerCardsRow';
import MarketCardsRow from './components/MarketCardsRow';

function App() {
  const Container = styled.div`
    height: 80vh;
    background: #925BFF;
    color: white;
  `;
  
  return (
    <Container >
      <DevelopCardsRow/>
      <MarketCardsRow/>
      <PlayerCardsRow/>
    </Container>
  );
}

export default App;

