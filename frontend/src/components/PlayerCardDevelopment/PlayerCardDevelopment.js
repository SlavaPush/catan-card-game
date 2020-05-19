import React from 'react'
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { takeCardFromPlayerResourcesToTempleBuffer } from '../../Redux/actions';

const Card = styled.div`
    height: 150px;
    background: #FFEB5E;
    color: green;
    width: 100px;
  `;


export default function PlayerCardDevelopment(props) {
    
    return (
        <Card>
            {props[0].name} <br />
            Штук: {props.number}
        </Card>
    )
}