
import { useEffect, useState } from 'react'
import {Hello} from './components/Hello';
import { Todos } from './components/Todos';
import './App.css'
import { Counter } from './components/Counter';


function App() {
const [show,setShow]=useState(true);
  return (
    <div className="App">
     <Counter />
     {show ? <Todos /> : null}
     <button onClick={() => {
      setShow(!show)
     }}>{show ? "Hide" : "Show"}</button>

    </div>
  );
}

export default App;
