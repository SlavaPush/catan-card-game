import React from 'react'
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { takeCardFromResourcesToTempleBuffer } from '../../Redux/actions';
import { stepCheck } from '../../helpers';

const Card = styled.div`
    height: 150px;
    background: #FFEB5E;
    color: ${props => props.marketStep
        ? 'white'
        : 'green'};
    width: 100px;
  `;


export default function CardResources() {
    const marketStep = useSelector(state => !state.cards.step)
    // logic check
    const playerNow = useSelector(state => state.playerNow)
    const isActiveStep = stepCheck(playerNow)
    const dispatch = useDispatch()
    return (
        <Card marketStep={marketStep} isActiveStep={isActiveStep} onClick={() => {
            marketStep
                && isActiveStep
                && dispatch(takeCardFromResourcesToTempleBuffer())
        }}>

            РЕСУРСЫ ЕБТ!
            {   marketStep
                && isActiveStep
                && 'active'}
        </Card>

    )
}
