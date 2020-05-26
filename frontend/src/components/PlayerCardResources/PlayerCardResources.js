import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { takeCardFromPlayerResourcesToTempleBuffer } from "../../Redux/actions";
import { Card } from "../CommonStyledComponents/ScCard";
import { selectCheck } from "../../helpers";
import "./Cardstyle.css";
import { cardsPhotos } from "../../helpers";

export default function PlayerCardResources({ allActive, card }) {
  const dispatch = useDispatch();
  const giveCard = useSelector(
    (state) => state.cards.exchangeTempleBuffer.giveCard
  );

  return (
    <Card
      {...{
        allActive,
        selected: selectCheck(giveCard.id, card),
      }}
      onClick={() =>
        allActive &&
        dispatch(takeCardFromPlayerResourcesToTempleBuffer(card[0].id))
      }
    >
      <div className="card-background">
        <div className="card-frame">
          <div className="frame-header">
            <h1 className="name">{card[0].name}</h1>
          </div>

          <img
            className="frame-art-res"
            src={`/${cardsPhotos[card[0].name]}.jpg`}
            alt={`${card[0].name}`}
          />

          <div className="info">{card.length}</div>
        </div>
      </div>
    </Card>
  );
}
