import React from 'react'
import styled from 'styled-components';
const reduxCardsName = [
    'ОВЦА',
    'РУДА',
    'ДЕРЕВО',
    'ГЛИНА',
    'ЗЕРНО',
]

export default function MarketCardsRow() {

    const Container = styled.div`
    padding: 10px 0;
    height: 150px;
    background: #6BFFC9;
    color: white;
    display: flex;
    justify-content: space-around;
  `;
    const Card = styled.div`
    height: 150px;
    background: #FFEB5E;
    color: green;
    width: 100px;
    `;
    return (
        <Container>
            {reduxCardsName.map(name => (
                <Card>
                    {name}
                </Card>
            ))}
        </Container>
    )
}
