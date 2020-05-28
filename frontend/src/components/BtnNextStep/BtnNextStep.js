import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeStep,
  swapCards,
  giveCards,
  buyDevelopmentCards,
  changemodalNameCard,
} from "../../Redux/actions";
import * as actions from "../../Redux/actions";
import {
  sagaStateTransfer,
  sagaWinnerNow,
} from "../../Redux/saga/saga-actions";
import { stepCheck, actionCardModifications } from "../../helpers";
import { Btn, Img, TextDiv, Spinner } from "./ScBtnNextStep";

export default function BtnNextStep() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cards);
  const player1points = useSelector((state) => state.cards.player1.points);
  const player2points = useSelector((state) => state.cards.player2.points);
  const step = useSelector((state) => state.cards.step);
  const playerNow = useSelector((state) => state.cards.playerNow);
  const buyTempleBuffer = useSelector(
    (state) => state.cards.buyTempleBuffer.takeCard
  );
  const countedDevelopCardsParameters = useSelector(
    (state) => state.cards[playerNow].countedDevelopCardsParameters
  );
  const isCardsChosen = useSelector((state) => {
    const path = state.cards;
    if (path.buyTempleBuffer.takeCard) return true;
    if (
      path.exchangeTempleBuffer.takeCard &&
      path.exchangeTempleBuffer.giveCard
    )
      return true;
    return false;
  });
  const isActiveStep = stepCheck(playerNow);

  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (flag) {
      dispatch(sagaStateTransfer(state.gameId, state));
      setFlag(false);
    }
    if (player1points >= 10 || player2points >= 10) {
      dispatch(sagaWinnerNow(playerNow));
      dispatch(changemodalNameCard("endGame"));
    }
  }, [flag, player1points, player2points, playerNow, dispatch, state]);
  const nextStep = () => {
    dispatch(swapCards());
    if (step) {
      if (buyTempleBuffer) {
        dispatch(buyDevelopmentCards(buyTempleBuffer));
      }
      countedDevelopCardsParameters.forEach((cards) =>
        actionCardModifications[cards[0].name](
          countedDevelopCardsParameters,
          dispatch,
          actions,
          playerNow
        )
      );
      dispatch(giveCards(2, "cards", playerNow));
    }
    dispatch(changeStep());
    setFlag(true);
  };

  return (
    <Btn {...{ isActiveStep }} onClick={() => isActiveStep && nextStep()}>
      <TextDiv>
        {isActiveStep
          ? isCardsChosen
            ? step
              ? "Купить"
              : "Обменять"
            : "Пропустить"
          : "Ожидайте"}
      </TextDiv>
      {isActiveStep ? (
        <Img src={"/play.svg"} />
      ) : (
        <Spinner src={"/Spinner-white.svg"} />
      )}
    </Btn>
  );
}
