import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

export default function HelpUserBoard() {
    const HelperDiv = styled.div`
        margin: auto;
        background-color: green;
        padding: 15px 40px;
        width: 150px;
        border-radius: 4px;
        color: white;
        text-align: center;
        vertical-align: middle;
        font-size: 14px;
    `
    const Prompt = styled.h3`
    color: white;
    margin-bottom:7px;
    margin: 0px
`
const Stage = styled.p`
margin: 5px
`
    const helpRule = useSelector(state => state.template.prompt)
    const step = useSelector(state => state.steps.step)

    return (
      <>
        
          {
          step[0]? <HelperDiv><Prompt>Подсказка:<Stage>Этап: {helpRule[0].stepName}</Stage></Prompt>{helpRule[0].rule}</HelperDiv>:
          step[1]? <HelperDiv><Prompt>Подсказка:<Stage>Этап: {helpRule[1].stepName}</Stage></Prompt>{helpRule[1].rule}</HelperDiv>:
          step[2]? <HelperDiv><Prompt>Подсказка:<Stage>Этап: {helpRule[2].stepName}</Stage></Prompt>{helpRule[2].rule}</HelperDiv>:
          <HelperDiv><Prompt>Подсказка:</Prompt>Ход соперника</HelperDiv>
          }

        </>
    )
}
