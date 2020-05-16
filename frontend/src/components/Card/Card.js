import React from 'react'
import styled, {css} from 'styled-components';




export default function DevelopCardRow({card}) {

    const Card = styled.div`
    height: 150px;
    background: #FFEB5E;
    color: green;
    ${() => card.nameCard && css`color: black;` }
    width: 100px;
  `;
  
    return (
        <Card>
            {card.nameCard}
        </Card>

    )
}
