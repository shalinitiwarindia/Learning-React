
import { useEffect, useState } from 'react'
import {Hello} from './components/Hello';
import { Todos } from './components/Todos';
import './App.css'


function App() {
//   const [todos, setTodos] = useState([]);
// useEffect(()=>{
//   fetch("http://localhost:8080/todos")
//   .then((d) => d.json())
//   .then((data)=>{
//     setTodos(data);
//   });
// },[]);
  return (
    <div className="App">
     
     <Todos />

    </div>
  );
}

export default App;
