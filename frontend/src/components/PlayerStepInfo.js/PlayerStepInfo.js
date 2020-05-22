import React from 'react'
import './PlayerStepInfo.css'
import { cardsPhotos, countCards } from '../../helpers'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

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


export default function PlayerStepInfo({
    namePlayer1,
    namePlayer2,
    pointsPlayer1,
    pointsPlayer2
}) {
    const playerLocal = localStorage.getItem('player')
    const step = useSelector(state => state.cards.step)
    const playerNow = useSelector(state => state.cards.playerNow)

    let enemyPlayer;
    if (playerLocal === 'player1') enemyPlayer = 'player2'
    else enemyPlayer = 'player1'

    const countedDevelopCardsParameters = useSelector(state => state.cards[enemyPlayer].developmentCards)
    const countedDevCards = countCards(countedDevelopCardsParameters)

    return (
        <>

            <div className='playerStepInfo'>
                <div>
                    <h1 className='playerNowInfoStep'>
                        {playerLocal === playerNow
                            ? step
                            ? 'Купите карту развития'
                            : 'Обменяйте карту'
                            : 'Ожидайте соперника'}
                        {}
                    </h1>
                </div>
                <div className="line"></div>
                <div>
                    <h1 className='playerNowInfoStep'>
                        {namePlayer1}:{pointsPlayer1} очков
                </h1>
                    <h1 className='playerNowInfoStep'>
                        {namePlayer2}:{pointsPlayer2} очков
                </h1>
                </div>
            </div>
            <div className='playerStepInfoCards'>
                <div>
                    <h2 className='playerNowInfoStepCards'>
                        карты развития соперника
                    </h2>
                </div>
                <div className="line"></div>
                <div className="imgEnemyCards">
                    {countedDevCards.map(card => (
                        <img className="imgEnemyCard" src={`/${cardsPhotos[card[0].name]}.jpg`} />
                    )
                    )}
                </div>

            </div>
        </>
    )
}
