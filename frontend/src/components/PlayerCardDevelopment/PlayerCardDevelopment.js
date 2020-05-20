import React from 'react'
import { Card } from '../CommonStyledComponents/ScCard';
import './Cardstyle.css'

export default function PlayerCardDevelopment({ card }) {
    return (
        <Card allActive={true}>
            <div className="card-background">

                <div className="card-frame">

                    <div className="frame-header">
                        <h1 className="name">{card[0].name}</h1>
                    </div>

                    <img className="frame-art" src="/house.jpg" />


                    <div className="frame-text-box">
                        <div className="description ftb-inner-margin">
                            Штук: {card.length}
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}

