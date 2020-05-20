import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeStep, swapCards, giveCards, buyDevelopmentCards } from '../../Redux/actions'
import * as actions from '../../Redux/actions'
import {sagaStateTransfer} from '../../Redux/saga/saga-actions'
import { socketVadim } from '../../socketVadim'
import { stepCheck, actionCardModifications } from '../../helpers'
import {Btn} from './ScBtnNextStep'



export default function BtnNextStep() {

    const dispatch = useDispatch()
    const state = useSelector(state => state.cards)
    const step = useSelector(state => state.cards.step)
    const playerNow = useSelector(state => state.cards.playerNow)
    const buyTempleBuffer = useSelector(state => state.cards.buyTempleBuffer.takeCard)
    const countedDevelopCardsParameters = useSelector(state =>
        state.cards[playerNow].countedDevelopCardsParameters)
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
    }

    return (
        <Btn onClick={() => isActiveStep && nextStep()}>
            NEXT
        </Btn >
    )
}
