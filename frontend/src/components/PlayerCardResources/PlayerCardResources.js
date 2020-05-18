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


export default function PlayerCardResources(props) {
    const marketStep = useSelector(state => !state.cards.step)
    const dispatch = useDispatch()
    return (
        <Card onClick={() => {
            marketStep && dispatch(takeCardFromPlayerResourcesToTempleBuffer(props[0].id))} }>
            {props[0].name} <br/>
            Штук: {props.number}
        </Card>
    )
}