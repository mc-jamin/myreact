import React, { useState } from 'react';
import "./styles.css";


export default function App() {
  return (
    <div className="App">
      <h1>Count App</h1>
      <h2>Press to start Counting</h2>
      <Counting/>
    </div>
  );
}

function Counting(){
  const [count, setCount] = useState(0);
  const increase = () => setCount(count+1);
  const decrease = () =>setCount(count-1);
  return (
    <>
    <p> You have clicked {count} times. </p>
    <button onClick={increase}> Click ++ </button>
    <p><button onClick={decrease}> Click -- </button></p>
    </>
  );
}
