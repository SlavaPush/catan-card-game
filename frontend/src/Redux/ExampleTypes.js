{type: 'All_Card_Random_Update',
}

{type: 'Give_Cards',
payload:{
  num:5,
  whom:'marketCards'
}}

{type: 'Give_Cards',
payload:{
  num:25,
  whom:'cards',
  player:'player1'
}}

{type: 'Swap_Cards',
payload: {
  playerNow:'player1',
  idPlayerCards:"8e4c1e11-7577-4b58-b556-ab61eaaed4c0",
  whom:'marketCards',
  idWhomCards:"dc594795-1944-436c-af11-4263f135836e",
}}

{type: 'Swap_Cards',
payload: {
  playerNow:'player1',
  idPlayerCards:"dc594795-1944-436c-af11-4263f135836e",
  whom:'cardsInGame',
}}

{type: 'S_T_P_CHANGE',
  payload: 1,
}

{type: 'Buy_Development_Cards',
  payload: {
    playerNow:'player1',
    developmentCardName:'город',
}}

{type: 'Next_Player',
}

