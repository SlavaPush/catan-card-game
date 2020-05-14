import {ADD, SUB, SET} from './types'

export const onADD = ()=>{
return{
  type:ADD
}
}
export const onSUB = ()=>{
return{
  type:SUB
}
}
export const onSET = (number)=>{
  return{
    type:SET,
    number
  }
}

