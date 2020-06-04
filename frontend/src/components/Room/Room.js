import React, {useState} from 'react';
import  {useDispatch} from 'react-redux';
import { useHistory  } from "react-router-dom";
import {playerName,gameId,allCardRandomUpdate,giveCards} from '../../Redux/actions'
import axios from 'axios'

import './Room.scss';
import './animation.css';

export default function Room() {
    const [player_1, setPlayer_1] = useState('');
    const [player_2, setPlayer_2] = useState('');
    const [nameError, setNameError] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const onSubmit = async (e) => {

      if (!player_1 || !player_2){
        setNameError(true);
        return;
      };
        e.preventDefault();
        dispatch(playerName('player1', player_1));
        dispatch(playerName('player2',player_2));
        let {data: {id}} = await axios('/createRoom');
        dispatch(gameId(id));
        dispatch(allCardRandomUpdate());
        dispatch(giveCards(5, "cards", 'player1'));
        dispatch(giveCards(5, "cards", 'player2'));
        dispatch(giveCards(5, "marketCards"));
        history.push(`/game/${id}/player1`);
    };



    return (
      <div className="container">
        <div className="row">
        <div className="animation-text-wrapper">
            <div className="Iam">
              <p>Колонизаторы.</p>
              
              <b>
                <div className="innerIam">
                  Играй!<br /> 
                  Строй!<br />
                  Завоёвывай!<br />
                  Грабь!<br />
                  Богатей!<br /> 
                  Побеждай!<br />
                  Пинай!<br />
                  Общайся!<br />
                  </div>
              </b>
            </div>
          </div>

          <div className="input-frame col-md-4 offset-md-8">
            <div className="input-wrapper">
              <h1 className="input-wrapper__title">Введите имена игроков</h1>
          <input type="text" className="input-wrapper__item" name="player_1" label="Игрок 1" placeholder="Ваше имя" required
          onChange={(e) => {setPlayer_1(e.target.value)}}
          />
          <input type="text" className="input-wrapper__item" name="playe_2" label="Игрок 2" placeholder="Имя соперника" required
          onChange={(e) => {setPlayer_2(e.target.value)}}
          />
          {nameError ? <p>Вы забыли ввести имена</p> : null}
          <button className="input-wrapper__button"
          onClick={onSubmit}
          >Начать игру</button>

            </div>
          </div>

        </div>
      </div>
    )
}

