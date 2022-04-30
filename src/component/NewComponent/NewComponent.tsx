import React from "react";

export type NewComponentType ={
  currentMoney: MoneyType[]
}
 type MoneyType ={
  banknots: string
  value:number
  number:string
}
export const NewComponent = (props:NewComponentType) => {
  return (
    <>
      <ul>
        {props.currentMoney.map((objFromMoneyArr, index) => {
          return (
            <li key={index}>
              <span>{objFromMoneyArr.banknots}</span>
              <span>{objFromMoneyArr.value}</span>
              <span>{objFromMoneyArr.number}</span>
            </li>
          )
        })}
      </ul>
    </>
  )
}