import React from 'react'
import styled from 'styled-components';



export default function DevelopCardRow() {
    const Card = styled.div`
    height: 150px;
    background: #FFEB5E;
    color: green;
    width: 100px;
  `;
    return (
        <Card>
            РЕСУРСЫ ЕБТ!
        </Card>

    )
}