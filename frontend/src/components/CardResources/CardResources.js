import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { takeCardFromResourcesToTempleBuffer } from "../../Redux/actions";
import { stepCheck, allActiveCheck, selectCheck } from "../../helpers";
import { Card } from "../CommonStyledComponents/ScCard";
import "./Cardstyle.css";
import { changemodalNameCard } from "../../Redux/actions";

export default function CardResources() {
  const marketStep = useSelector((state) => !state.cards.step);
  const playerNow = useSelector((state) => state.cards.playerNow);
  const takeCard = useSelector(
    (state) => state.cards.exchangeTempleBuffer.takeCard
  );
  const cardsInGame = useSelector((state) => state.cards.cardsInGame);
  const dispatch = useDispatch();

  const selected = selectCheck(takeCard.id, cardsInGame);
  const allActive = allActiveCheck(stepCheck(playerNow), marketStep);

  return (
    <Card
      {...{ allActive, selected }}
      onClick={() =>
        allActive && dispatch(takeCardFromResourcesToTempleBuffer())
      }
      onContextMenu={(e) => {
        e.preventDefault();
        dispatch(changemodalNameCard("ресурсы"));
      }}
    >
      <div className="card-background">
        <div className="card-frame"></div>
      </div>
    </Card>
  );
}
