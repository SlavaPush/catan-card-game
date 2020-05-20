import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { changeStep, swapCards, giveCards, buyDevelopmentCards } from '../../Redux/actions'
import { actionCardModifications } from './actionCardModifications'
import * as actions from '../../Redux/actions'
import {sagaStateTransfer,sagaWinnerNow} from '../../Redux/saga/saga-actions'
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
    const player1points = useSelector(state => state.cards.player1.points)
    const player2points = useSelector(state => state.cards.player2.points)
    const step = useSelector(state => state.cards.step)
    const playerNow = useSelector(state => state.cards.playerNow)
    const buyTempleBuffer = useSelector(state => state.cards.buyTempleBuffer.takeCard)
    const countedDevelopCardsParameters = useSelector(state =>
        state.cards[playerNow].countedDevelopCardsParameters)

    // test logic   
    const isActiveStep = stepCheck(playerNow)
    const [flag ,setFlag] = useState(false)

    useEffect(()=>{
        if (flag) {
          dispatch(sagaStateTransfer(state.gameId, state))
          setFlag(false)
        }

          
    },[flag])
    
    const nextStep = () => {
        dispatch(swapCards());
        if (step) {
            if (buyTempleBuffer) {
                dispatch(buyDevelopmentCards(buyTempleBuffer))
                ////////////////////// proverka winner
                if (player1points >= 1 || player2points >= 1) {// peredelat na 10
                    /* dispatch (playerNow) */ // action1
                    dispatch (sagaWinnerNow(playerNow))
                }

            }
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
        setFlag(true)
            
          
    
        /// logic testing
        // socketVadim.send(JSON.stringify(state))
    }

    return (
        <Btn onClick={() => isActiveStep && nextStep()}>
            NEXT
        </Btn >
    )
}
