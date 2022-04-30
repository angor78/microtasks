import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./component/NewComponent/NewComponent";


type FilterType = "All" | 'Rubles' | 'Dollars'

function App() {
  const [money, setMoney] = useState([
    {banknots: 'Dollars', value: 100, number: ' a1234567890'},
    {banknots: 'Dollars', value: 50, number: ' z1234567890'},
    {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
    {banknots: 'Dollars', value: 100, number: ' e1234567890'},
    {banknots: 'Dollars', value: 50, number: ' c1234567890'},
    {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
    {banknots: 'Dollars', value: 50, number: ' x1234567890'},
    {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
  ])
  const [filter, setFilter] = useState<FilterType>("All")
  let currentMoney = money
  if (filter === 'Rubles') {
    currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'RUBLS')
  }
  if (filter === 'Dollars') {
    currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars')
  }

  const onClickFilterHandler = (nameButton: FilterType) => {
    setFilter(nameButton)
  }
  return (
    <div className="App">
      {/*<ul>*/}
      {/*  {currentMoney.map((objFromMoneyArr, index) => {*/}
      {/*    return (*/}
      {/*      <li key={index}>*/}
      {/*        <span>{objFromMoneyArr.banknots}</span>*/}
      {/*        <span>{objFromMoneyArr.value}</span>*/}
      {/*        <span>{objFromMoneyArr.number}</span>*/}
      {/*      </li>*/}
      {/*    )*/}
      {/*  })}*/}
      {/*</ul>*/}
      <NewComponent currentMoney={currentMoney}/>
      <button onClick={() => onClickFilterHandler('All')}>All</button>
      <button onClick={() => onClickFilterHandler("Rubles")}>Rubles</button>
      <button onClick={() => onClickFilterHandler("Dollars")}>Dollars</button>
    </div>
  );
}


export default App;

