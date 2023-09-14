import React, { useState } from 'react';
import "./styles.css";
const App=(props)=>{
  return (
    <div className="App">
      <h1>Count App</h1>
      <h2>Press to start Counting</h2>
      <Counting/>
    </div>
  );
}
const Counting=()=> {
  const [count, setCount] = useState(0);
  const [isPositive, setPositive] = useState(true);
  const buttonValue = {
   buttonAdd : {
    type : "button",
    name : "addition",
    value : "Add",
    class : "btn",
    onclick : ()=>{
      setPositive(true);
      setCount(count+1);
    }
   },
   buttonSubtract : {
    type : "button",
    name : "subtraction",
    value : "Subtract",
    class : "btn",
    onclick : ()=>{
      if(count>0) setCount(count-1);
      else setPositive(false);
    }
   }
  };
  return (
    <div> 
    <p> 
    <input type ={buttonValue.buttonAdd.type} 
          className = {buttonValue.buttonAdd.class} 
          onClick={buttonValue.buttonAdd.onclick} 
          value = {buttonValue.buttonAdd.value}/>
    </p>
    <p>
      <input type ={buttonValue.buttonSubtract.type} 
            className = {buttonValue.buttonSubtract.class} 
            onClick={buttonValue.buttonSubtract.onclick} 
            value = {buttonValue.buttonSubtract.value}/>
    </p>
    <p>
      { isPositive ? `Clicked ${count} times`: "Num cannot be negative" }
    </p>
    </div>
  );
}
export default App;
