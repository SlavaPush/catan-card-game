import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { takeCardFromMarketToTempleBuffer } from '../../Redux/actions';
import { Card } from '../CommonStyledComponents/ScCard';
import { selectCheck } from '../../helpers';
import './Cardstyle.css'



export default function CardMarket({ card, allActive }) {
    const dispatch = useDispatch()
    const takeCard = useSelector(state => state.cards.exchangeTempleBuffer.takeCard)

    return (
        <Card
            {...{
                allActive,
                selected: selectCheck(takeCard.id, [card])
            }}
            onClick={() => allActive && dispatch(takeCardFromMarketToTempleBuffer(card.id))}>
            <div className="card-background">

                <div className="card-frame">

                    <div className="frame-header">
                        <h1 className="name">{card.name}</h1>
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
