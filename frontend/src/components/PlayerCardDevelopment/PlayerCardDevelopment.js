import React from 'react'
import { Card } from '../CommonStyledComponents/ScCard';
import './Cardstyle.css'
import { cardsPhotos } from '../../helpers'

export default function PlayerCardDevelopment({ card }) {
    return (
        <Card >
            <div className="card-background">

                <div className="card-frame">

                    <div className="frame-header">
                        <h1 className="name">{card[0].name}</h1>
                    </div>

                    <img className="frame-art" src={`/${cardsPhotos[card[0].name]}.jpg`} alt={`${card[0].name}`} />


                    <div className="frame-text-box">
                        <div className="description ftb-inner-margin">
                            карт: {card.length}
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}

