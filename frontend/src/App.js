import React from 'react';
import styled from 'styled-components';
import DevelopCardsRow from './comp/DevelopCardsRow';
import PlayerCardsRow from './comp/PlayerCardsRow';
import MarketCardsRow from './comp/MarketCardsRow';

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
import React from 'react'

