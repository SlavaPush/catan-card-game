import React,{useEffect} from 'react'
import './NameActionHelper.css'
import {useSelector, useDispatch} from 'react-redux'
import { useHistory } from "react-router-dom";
import {setReceivedCardsState} from '../../Redux/actions'
import {initialState} from '../../Redux/reducers/initialState'

const NameActionHelper = ({modalNameCard, onCancel})=>{
  const gameId = useSelector(state => state.cards.gameId)
  const playerNow = useSelector(state => state.cards.playerNow)
  const player1Name = useSelector(state => state.cards.player1.name)
  const player2Name = useSelector(state => state.cards.player2.name)
  const history = useHistory();
  const dispatch = useDispatch();

  const actionCopyURL = (e)=>{
  const copyText = document.getElementById("myInput");
  copyText.select();
  document.execCommand("copy");
  }

  const newGame = ()=>{
    dispatch(setReceivedCardsState(initialState))
    history.push("/")
  }

  if (modalNameCard === 'город') {
    return (
      <div className='ts'>
      <h1 >Город</h1>
      <h3>Действует один раз:</h3>
      <p>Строительство Двух городов рушит экономику соперника! Последствия заставляют его объявить дефолт. Половина ресурсов обесцениваються и пропадают.</p>
      <p>Строительство Четырех городов захватывает здание соперника!!! Колонизатор будь внимателен, если соперник еще не строил здание захват отменяется.</p>
      <h3>Цена:</h3>
      <p>2шт. Зерно + 3шт. Руда</p>
      {/* <button type="button" onClick={onCancel }> Закрыть </button> */}
      </div>)
  }
  else if (modalNameCard === 'рыцарь') {
    return (
      <div className='ts'>
      <h1>Рыцарь</h1>
      <h3>Действует каждый ход:</h3>
      <p>Один рыцарь способен отвоевать одну карту в вашу колоду.</p>
      <p>Второй рыцарь ленивый и ничего не делает.</p>
      <p>А Третий пинает второго!!! Объеденившись, дают вам еще одну карту.</p>
      <h3>Цена:</h3>
      <p>Зерно + Шерсть + Руда</p>
      {/* <button type="button" onClick={onCancel}> Закрыть </button> */}
      </div>
      )
  }
  else if (modalNameCard === 'здание') {
    return (
      <div className='ts'>
      <h1>Здание</h1>
      <h3>Действует каждый ход:</h3>
      <p>На каждое здание нанимается вор. Он умудряется ты-ты-тырыть карту у вашего соперника.</p>
      <h3>Цена:</h3>
      <p>3шт. Шерсть + Руда</p>
      {/* <button type="button" onClick={onCancel}> Закрыть </button> */}
      </div>
      )
  }
  else if (modalNameCard === 'дорога') {
    return (
      <div className='ts'>
      <h1>Дорога</h1>
      <h3>Действует всегда:</h3>
      <p>Дорогу строят ради отношений между колонизатором и рынком.</p>
      <h3>Цена:</h3>
      <p>Дерево+Глина</p>
      {/* <button type="button" onClick={onCancel}> Закрыть </button> */}
      </div>
      )
  }
  else if (modalNameCard === 'ресурсы') {
    return (
      <div className='ts'>
      <h1>Колода ресурсов</h1>
      <p> Здесь магия меняет твою карту на карту с колоды</p>
      {/* <button type="button" onClick={onCancel}> Закрыть </button> */}
      </div>
    )
  }
  else if (modalNameCard === 'urlPl2') {
    const urlPl2 = `http://localhost:3000/game/${gameId}/player2` // DEPLOY
    return (
      <div className='ts '>
      <h3>Отправь другу прежде чем начать</h3>
      <input type="text" defaultValue={urlPl2} id="myInput" className='inputHidden'/>
      <input className='copyButtonInput' type="button" value='Копировать ссылку' onClick={()=>{actionCopyURL(); onCancel()}} />
      {/* <button type="button" onClick={onCancel}> Закрыть </button> */}
      </div>
    )
  }
  else if (modalNameCard === 'endGame') {
    console.log(playerNow);
    
    return (
      <div className='winnerCSS'>
       { playerNow === 'player1'?
      <span>{`Поздравляю с победой ${player2Name} !!!`}</span>:
      <span>{`Поздравляю с победой ${player1Name} !!!`}</span>
       }
      <p>Заходите еще!!!</p>
      <button onClick={newGame}> новая игра </button>
      </div>
    )
  }
  
return null

}


export default NameActionHelper
