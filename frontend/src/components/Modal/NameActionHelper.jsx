import React from "react";
import "./NameActionHelper.css";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setReceivedCardsState } from "../../Redux/actions";
import { initialState } from "../../Redux/reducers/initialState";

const NameActionHelper = ({ modalNameCard, onCancel }) => {
  const gameId = useSelector((state) => state.cards.gameId);
  const playerNow = useSelector((state) => state.cards.playerNow);
  const player1Name = useSelector((state) => state.cards.player1.name);
  const player2Name = useSelector((state) => state.cards.player2.name);
  const history = useHistory();
  const dispatch = useDispatch();

  const actionCopyURL = (e) => {
    const copyText = document.getElementById("myInput");
    copyText.select();
    document.execCommand("copy");
  };

  const newGame = () => {
    dispatch(setReceivedCardsState(initialState));
    history.push("/");
  };

  if (modalNameCard === "город") {
    return (
      <div className="ts">
        <div className="containerForText">
          <h1 className="h1card">Город</h1>
          <h2 className="h2card">Действует один раз:</h2>
          <p className="pcard">
            Строительство города рушит экономику соперника! Половина ресурсов обесцениваються и
            пропадают.
          </p>
          <p>
            Строительство Двух городов захватывает здание соперника.
            Колонизатор будь внимателен, если соперник еще не строил здание
            захват отменяется.
          </p>
          <h2 className="h2cardPrice">Цена:</h2>
          <p className="pCardPrice">Зерно  x2 + Руда x3</p>
          {/* <button type="button" onClick={onCancel }> Закрыть </button> */}
        </div>
      </div>
    );
  } else if (modalNameCard === "рыцарь") {
    return (
      <div className="ts">
        <h1 className="h1card">Рыцарь</h1>
        <h2 className="h2card">Действует каждый ход:</h2>
        <p className="pcard">Одна карта рыцаря отвоевывает одну карту в вашу колоду каждый ход.</p>
        <p className="pcard">
          Три карты рыцаря отвоевывают по 2 карты ресурсов
        </p>
        <h2 className="h2cardPrice">Цена:</h2>
        <p className="pCardPrice">Зерно + Шерсть + Руда</p>
        {/* <button type="button" onClick={onCancel}> Закрыть </button> */}
      </div>
    );
  } else if (modalNameCard === "здание") {
    return (
      <div className="ts">
        <h1 className="h1card">Здание</h1>
        <h2 className="h2card">Действует каждый ход:</h2>
        <p className="pcard">
          Каждая карта позволяет забрать 1 карту ресурсов у соперника каждый ход.
        </p>
        <h2 className="h2cardPrice">Цена:</h2>
        <p className="pCardPrice"> Шерсть x3 + Руда</p>
        {/* <button type="button" onClick={onCancel}> Закрыть </button> */}
      </div>
    );
  } else if (modalNameCard === "дорога") {
    return (
      <div className="ts">
        <h1 className="h1card">Дорога</h1>
        <h2 className="h2card">Действует всегда:</h2>
        <p className="pcard">Дорого позволяет обменивать карты не только с колодой, но и с рынком</p>
        <h2 className="h2cardPrice">Цена:</h2>
        <p className="pCardPrice">Дерево + Глина</p>
        {/* <button type="button" onClick={onCancel}> Закрыть </button> */}
      </div>
    );
  } else if (modalNameCard === "ресурсы") {
    return (
      <div className="ts">
        <h1>Колода ресурсов</h1>
        <p> Здесь магия меняет твою карту на карту с колоды</p>
        {/* <button type="button" onClick={onCancel}> Закрыть </button> */}
      </div>
    );
  } else if (modalNameCard === "urlPl2") {
    const urlPl2 = `https://catan-card-game.herokuapp.com/game/${gameId}/player2` // DEPLOY
    // const urlPl2 = `http://localhost:3000/game/${gameId}/player2`;
    return (
      <div className="ts ">
        <h3>Отправь ссылку другу для начала игры</h3>
        <input
          type="text"
          defaultValue={urlPl2}
          id="myInput"
          className="inputHidden"
        />
        <button
          className="modal-button-large"
          onClick={() => {
            actionCopyURL();
            onCancel();
          }}
        >
          Копировать ссылку
        </button>
        {/* <button type="button" onClick={onCancel}> Закрыть </button> */}
      </div>
    );
  } else if (modalNameCard === "endGame") {
    return (
      <div className="winnerCSS">
        {playerNow === "player1" ? (
          <span>{`Поздравляю с победой ${player2Name} !!!`}</span>
        ) : (
          <span>{`Поздравляю с победой ${player1Name} !!!`}</span>
        )}
        <p>Заходите еще!!!</p>
        <button
        className="modal-button-large"
        onClick={newGame}> новая игра </button>
      </div>
    );
  }

  return null;
};

export default NameActionHelper;
