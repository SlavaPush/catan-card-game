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
    const points = useSelector(state => state.cards.player1.points)
    return (
        <Counter >
            Счет: {points}
        </Counter>
    )
}
