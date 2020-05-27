import React from 'react'
import { useDispatch } from 'react-redux';
import { takeCardFromDevelopmentCardsToTempleBuffer } from '../../Redux/actions';
import { Card } from '../CommonStyledComponents/ScCard';
import './Cardstyle.css'
import { cardsPhotos } from '../../helpers'
import {changemodalNameCard } from '../../Redux/actions';


export default function CardDev({ card, allActive, selected }) {
    const dispatch = useDispatch();
    
    return (
        <Card
            {...{ allActive, selected }}
            onClick={() => allActive && dispatch(takeCardFromDevelopmentCardsToTempleBuffer(card[0].name))}
            onContextMenu={(e) => {
                e.preventDefault()
                dispatch(changemodalNameCard(card[0].name))
            }}>
            <div className="card-background">
                <div className="card-frame">
                    <div className="frame-header">
                        <h1 className="name">{card[0].name}</h1>
                    </div>
                    <img className="frame-art" src={`/${cardsPhotos[card[0].name]}.jpg`} alt={`${card[0].name}`}/>
                    <div className="frame-text-box">
                        <div className="description ftb-inner-margin">
                            {card[0].point > 0 && card[0].point}
                            {card[0].point === 1 && ' очко'}
                            {card[0].point > 1 && ' очка'}
                            {card[0].point === 0 && 'Без очков'}
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}


