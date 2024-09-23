
import { useEffect, useRef, useState } from 'react'
  import './App.css'


function App() {

const [counter,setCounter]=useState(0);
const ref=useRef(10);

console.log("X is initially:",ref);
  return (
    <div className="App">
      <h3>Counter: {counter}</h3>
      <button 
      onClick={()=>{
        setCounter(counter+1)
      }}
      >Change Counter</button>

    <button onClick={()=>{
      ref.current +=1;
      console.log("X is changed:",ref);
    }}>Change X</button>
    

    </div>
  );
}

export default App;
