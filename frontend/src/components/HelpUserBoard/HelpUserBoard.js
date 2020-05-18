import React, { useState } from "react";
import styled, { css } from "styled-components";
import LogicPart2 from './components/LogicPart2';


////////////////////////////////////////////////////////////////////
// Пока не используется, подключить после подключения Redax
////////////////////////////////////////////////////////////////////

export default function HelpUserBoard() {
  const [close, setClose] = useState(true)

  const Prompt = styled.h3`
    color: white;
    margin-bottom: 7px;
    margin: 0px;
    ${(close) => close &&
      css`
      color: #FFFAFA ;
      margin: 0 ;
      padding: 10px 15px 10px 7px;
      width: 300px;
      border-radius: 4px;
      text-align: center;
      vertical-align: middle;
      font-size: 20px;
      background-color: green;
      &:hover {
        background-color: palevioletred;
        color: white;
      }
    ` }
  `;

  return (
    <>
      {close
        ? <Prompt onClick={() => setClose(false)}>Подсказка</Prompt>
        : <LogicPart2 close={close} ActionClick={() => setClose(true)} />}
    </>
  );
}
