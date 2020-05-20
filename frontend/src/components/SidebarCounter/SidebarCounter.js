import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const Counter = styled.div`
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

export default function SidebarCounter() {
    const step = useSelector(state => state.cards.step)
    const namePlayer1 = useSelector(state => state.cards.player1.name)
    const namePlayer2 = useSelector(state => state.cards.player2.name)
    const pointsPlayer1 = useSelector(state => state.cards.player1.points)
    const pointsPlayer2 = useSelector(state => state.cards.player2.points)
    const playerNowName = useSelector(state => state.cards[state.cards.playerNow].name)

    return (
        <>
            <Counter >
                Ходит: {playerNowName}
            </Counter>
            <Counter >
                Счет <br />
                {namePlayer1}: {pointsPlayer1} <br />
                {namePlayer2}: {pointsPlayer2}
            </Counter>
            <Counter >
                {step
                    ? 'Купите карту развития'
                    : 'Обменяйте карту'}
            </Counter>
        </>
    )
}
