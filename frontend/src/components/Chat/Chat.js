import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addMessage} from '../../Redux/chat-actions';

import './Chat.css';

export default function Chat() {

  const dispatch = useDispatch();
  const messages = useSelector(state => state.chat.messages);
  const state = useSelector(state => state.cards);

  const localStoragePlayer = localStorage.getItem('player');
  let author;
  if (localStoragePlayer === 'player1') author = state.player1.name;
  if (localStoragePlayer === 'player2') author = state.player2.name;

  const [message, setMessage] = useState('');

  const keyPress = (e) => {
    if (e.key === 'Enter') {
      dispatch(addMessage(message, author))
      setMessage('')
    }
  };

  return (
    <div className="chat-wrapper">
      <div className="caht-list">
        <div className="chat-list-item">
          {
            messages ? messages.map(({message, author}, idx) => {
              return <span className="chat-list-row message" key={idx}>
              <p className="chat-list-author">{author}:</p>
              {message}
            </span>
            }) : null
          }
        </div>
      </div>
      <input className="chat-list-input" type="text" placeholder="Введите текст и нажмите Enter"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      onKeyPress={keyPress}/>

    </div>
  )
}
