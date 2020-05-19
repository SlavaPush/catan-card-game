import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { changeStep, swapCards, giveCards } from '../../Redux/actions'
import { actionCardModifications } from './actionCardModifications'
import * as actions from '../../Redux/actions'
import {sagaStateTransfer} from '../../Redux/saga/saga-actions'


const Btn = styled.div`
        margin: auto;
        background-color: green;
        padding: 15px 40px;
        width: 150px;
        border-radius: 4px;
        color: white;
        text-align: center;
        vertical-align: middle;
        font-size: 2rem;
    `
export default function BtnNextStep() {
    const dispatch = useDispatch()
    const step = useSelector(state => state.cards.step)
    const playerNow = useSelector(state => state.cards.playerNow)
    const countedDevelopCardsParameters = useSelector(state => state.cards[playerNow].countedDevelopCardsParameters)
    return (
        <Btn onClick={() => {
            dispatch(swapCards());
            dispatch(changeStep());
            dispatch(sagaStateTransfer('sndjvcnjkdnjcnednfc'));
            if (step) {
                countedDevelopCardsParameters.forEach(cards => actionCardModifications[cards[0].name](
                    countedDevelopCardsParameters,
                    dispatch,
                    actions,
                    playerNow,
                ))
                dispatch(giveCards(2, "cards", playerNow))
            }
        }}>
            NEXT
        </Btn>
    )
}
