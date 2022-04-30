import React from 'react';
import './App.css';
import {Button} from "./component/Button/Button";


function App() {
  const Button1Foo = (subscriber: string, age: number) => {
    console.log(subscriber, age)
  }
  const Button2Foo = (subscriber: string, age: number) => {
    console.log(subscriber, age)
  }
  const Button3Foo = () => {
    console.log("Stupid")
  }
  return (
    <div className="App">
      <Button name={'Button 1'} callBack={() => Button1Foo("Ivan", 23)}/>
      <Button name={'Button 2'} callBack={() => Button2Foo("Vasia", 45)}/>
      <Button name={'Button 3'} callBack={Button3Foo}/>
    </div>
  );
}


export default App;

