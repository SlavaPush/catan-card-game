import React from 'react'
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { buyDevelopmentCards } from '../../Redux/actions';

const Card = styled.div`
    height: 150px;
    background: #FFEB5E;
    color: green;
    width: 100px;
  `;

export default function DevelopCardRow({ card,  isActive, marketStep}) {
    const dispatch = useDispatch();
    return (
        <Card onClick ={()=> isActive && marketStep && dispatch(buyDevelopmentCards(card[0].name))}>
            {card[0].name}<br/>
            {isActive && marketStep && 'Active'}  
        </Card>

    )
}