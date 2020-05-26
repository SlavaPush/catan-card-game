{type: 'All_CARD_RANDOM_UPDATE',
}

{type: 'GIVE_CARDS',
payload:{
  num:5,
  whom:'marketCards'
}}

{type: 'GIVE_CARDS',
payload:{
  num:25,
  whom:'cards',
  player:'player1'
}}

{type: 'SWAP_CARDS',
payload: {
  playerNow:'player1',
  idPlayerCards:"8e4c1e11-7577-4b58-b556-ab61eaaed4c0",
  whom:'marketCards',
  idWhomCards:"dc594795-1944-436c-af11-4263f135836e",
}}

{type: 'SWAP_CARDS',
payload: {
  playerNow:'player1',
  idPlayerCards:"dc594795-1944-436c-af11-4263f135836e",
  whom:'cardsInGame',
}}

{type: 'STEP_CHANGE',
  payload: 1,
}

{type: 'BUY_DEVELOPMENT_CARDS',
  payload: {
    playerNow:'player1',
    developmentCardName:'город',
}}

{type: 'Next_Player',
}

{
  type: 'SET_RECEIVED_CARDS_STATE',
  payload: {'statefkfjnakfjnkjn roagn4weo'},
}
{
  type: 'SAGA_REMOVE_OPPONENT_CARD',
  payload: 'player1'
}
 {
  type: 'SAGA_CITY_LOGIC',
  payload: {
    playerNow:'player1',
    countString:'Two'
  }
}
