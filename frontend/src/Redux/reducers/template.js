
// import { } from "../types";
// import produce from "immer";
// import { v4 as uuid } from 'uuid';

const initialState = {
  rule:'',
  priceDevelopmentCards:[
    {name:'Дорога', coast:'Дерево + Глина',point:1},
    {name:'Рыцарь', coast:'Зерно + Шерсть + Руда'},
    {name:'Город ', coast:'2шт. Зерно + 3шт. Руда',point:2},
    {name:'Здание', coast:'3шт. Шерсть + Руда',point:3},
  ],
  prompt: [
    {stepName:'Торговля', rule:'обменяйте свои карты с руки на карты с рынка и из стопки сырья'},
    {stepName:'Развитие', rule:'купите карту развития, оплата их стоимости согласно памятке'},
    {stepName:'Добыча', rule:'добор карт сырья на руку'},
  ]
};


export default function template(state = initialState, { type, payload }) {
  switch (type) {

    // case Price_Development_Cards: {// отдает цены и очки карт развития
    //   return produce(state, draft => {

    //     draft.developmentCards = developmentCards;
    //   });
    // }

    default:
      return state;
  }
}
