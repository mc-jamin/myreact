import React, { useState } from 'react';
import "./styles.css";
const App=()=>{
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
  const increase =()=> setCount(count+1);
  const decrease =()=>{
    if (count==0){
       alert("Cannot be negative");
    }
    else setCount(count-1);
  }
  return (
    <>
    <p> You have clicked {count} times. </p>
    <button className = "btn" onClick={increase}> Click Add </button>
    <p><button className = "btn" onClick={decrease}> Click Minus </button></p>
    </>
  );
}
export default App;
