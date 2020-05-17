import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

export default function BtnNextStep() {
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
    //SH Добавил счет\логику для двух игроков
    const pointsPlayer1 = useSelector(state => state.cards.player1.points)
    const pointsPlayer2 = useSelector(state => state.cards.player2.points)
    const namePlayer1 = useSelector(state => state.cards.player1.name)
    const namePlayer2 = useSelector(state => state.cards.player2.name)
    return (
      <>
        <Counter >
        Игрок: {namePlayer1}   Счет: {pointsPlayer1}
        </Counter>
        <Counter >
        Игрок: {namePlayer2}  Счет: {pointsPlayer2}
        </Counter>
        </>
    )
}
//SH Добавил счет\логику для двух игроков
