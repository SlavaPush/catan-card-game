import React from 'react'
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { takeCardFromResourcesToTempleBuffer } from '../../Redux/actions';

const Card = styled.div`
    height: 150px;
    background: #FFEB5E;
    color: green;
    width: 100px;
  `;


export default function CardResources() {
    const marketStep = useSelector(state => !state.cards.step)
    const dispatch = useDispatch()
    return (
        <Card onClick={() => {
            marketStep && dispatch(takeCardFromResourcesToTempleBuffer())} }>
            РЕСУРСЫ ЕБТ!
            {marketStep && 'active'}
        </Card>

    )
}
