import React from 'react';
import './App.css';


type NewComponentType = {
  topCars: TopCarsType[]
}
type TopCarsType = {
  key:number
  manufacturer: string
  model: string
}

function App() {
  const topCars = [
    {key:1,manufacturer: 'BMW', model: 'm5cs'},
    {key:2,manufacturer: 'Mercedes', model: 'e63s'},
    {key:3,manufacturer: 'Audi', model: 'rs6'}
  ]
  return (
    <div className="App">
      <NewComponent topCars={topCars}/>
    </div>
  );
}

const NewComponent = (props: NewComponentType) => {
  return (
    <ul>
      {props.topCars.map((obj,index) => {
          return (
            <li key={index}>
              <span> Manufactured: {obj.manufacturer}</span>
              <span> Model: {obj.model}</span>
            </li>)
        }
      )}
    </ul>

    // <table>
    //   <tr>
    //     <th>Company</th>
    //     <th>Model</th>
    //   </tr>
    //   {props.topCars.map((obj, index) => {
    //     return (
    //       <tr>
    //         <th key={index}>{obj.manufacturer}</th>
    //         <th key={index}>{obj.model}</th>
    //       </tr>
    //     )
    //   })}
    // </table>
  )
}

export default App;
