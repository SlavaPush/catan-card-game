import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { takeCardFromPlayerResourcesToTempleBuffer } from '../../Redux/actions';
import { Card } from '../CommonStyledComponents/ScCard';
import { selectCheck } from '../../helpers';
import './Cardstyle.css'


export default function PlayerCardResources({ allActive, card }) {

    const dispatch = useDispatch()
    const giveCard = useSelector(state => state.cards.exchangeTempleBuffer.giveCard)

    return (
        <Card
            {...{
                allActive,
                selected: selectCheck(giveCard.id, card),
            }}
            onClick={() => allActive && dispatch(takeCardFromPlayerResourcesToTempleBuffer(card[0].id))}>
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
