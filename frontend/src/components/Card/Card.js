import React from 'react'
import { useDispatch } from 'react-redux';
import { takeCardFromDevelopmentCardsToTempleBuffer } from '../../Redux/actions';
import { Card } from '../CommonStyledComponents/ScCard';
import './Cardstyle.css'



export default function CardDev({ card, allActive, selected }) {
    const dispatch = useDispatch();
    return (
        <Card
            {...{ allActive, selected }}
            onClick={() => allActive && dispatch(takeCardFromDevelopmentCardsToTempleBuffer(card[0].name))}>
            <div className="card-background">

                <div className="card-frame">

                    <div className="frame-header">
                        <h1 className="name">{card[0].name}</h1>
                    </div>

                    <img className="frame-art" src="/house.jpg" />


                    <div className="frame-text-box">
                        <div className="description ftb-inner-margin">
                            5 очков
                </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}


