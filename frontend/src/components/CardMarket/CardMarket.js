import React from 'react'
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { takeCardFromMarketToTempleBuffer } from '../../Redux/actions';

const Card = styled.div`
    height: 150px;
    background: #FFEB5E;
    color: green;
    width: 100px;
  `;


export default function CardMarket({ name, id, marketAvailable, isActiveStep }) {
    const marketStep = useSelector(state => !state.cards.step)
    const dispatch = useDispatch()
    return (
        <Card onClick={() => {
            marketStep
                && marketAvailable
                && isActiveStep
                && dispatch(takeCardFromMarketToTempleBuffer(id))}}>
            {name}
            {marketAvailable
                && marketStep
                && isActiveStep
                && 'active'}
        </Card>

    )
}
