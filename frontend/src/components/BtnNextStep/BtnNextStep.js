import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { changeStep, swapCards, giveCards, buyDevelopmentCards } from '../../Redux/actions'
import { actionCardModifications } from './actionCardModifications'
import * as actions from '../../Redux/actions'
import { socketVadim } from '../../socketVadim'
import { stepCheck } from '../../helpers'


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
    const state = useSelector(state => state.cards)
    const step = useSelector(state => state.cards.step)
    const playerNow = useSelector(state => state.cards.playerNow)
    const buyTempleBuffer = useSelector(state => state.cards.buyTempleBuffer.takeCard)
    const countedDevelopCardsParameters = useSelector(state =>
        state.cards[playerNow].countedDevelopCardsParameters)

    // test logic   
    const isActiveStep = stepCheck(playerNow)

    const nextStep = () => {
        dispatch(swapCards());
        if (step) {
            if (buyTempleBuffer) dispatch(buyDevelopmentCards(buyTempleBuffer))
            countedDevelopCardsParameters.forEach(cards =>
                actionCardModifications[cards[0].name](
                    countedDevelopCardsParameters,
                    dispatch,
                    actions,
                    playerNow,
                ))
            dispatch(giveCards(2, "cards", playerNow))
        }
        dispatch(changeStep());
        /// logic testing
        socketVadim.send(JSON.stringify(state))
    }

    return (
        <Btn onClick={() => isActiveStep && nextStep()}>
            NEXT
        </Btn >
    )
}
