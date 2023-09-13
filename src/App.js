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
const Counting=(props)=> {
  const [count, setCount] = useState(0);
  const [isPositive, setPositive] = useState(true);
  const increase =()=>{
    setPositive(true);
    setCount(count+1);
  }
  const decrease =()=>{
    if(count>0) setCount(count-1);
    else setPositive(false);    
  }  
  return (
    <>  
    <input type ="button" className = "btn" onClick={increase} value = "Add"/>
    <p><input type = "button" className = "btn" onClick={decrease} value = "Subtract"/></p>
    <p>
      { isPositive ? `Clicked ${count} times`: "Num cannot be negative" }
    </p>
    </>
  );
}
export default App;
