import React from 'react';
import styled from 'styled-components';
import DevelopCardsRow from './components/DevelopCardsRow/DevelopCardsRow';
import PlayerCardsRow from './components/PlayerCardsRow/PlayerCardsRow';
import MarketCardsRow from './components/MarketCardsRow/MarketCardsRow';

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

