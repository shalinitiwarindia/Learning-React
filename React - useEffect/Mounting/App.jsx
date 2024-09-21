
import { useEffect, useState } from 'react'
import {Hello} from './components/Hello';
import './App.css'


function App() {
  const [todos, setTodos] = useState([]);
useEffect(()=>{
  fetch("http://localhost:8080/todos")
  .then((d) => d.json())
  .then((data)=>{
    setTodos(data);
  });
},[]);
  return (
    <div className="App">
      {todos.map((todo)=>(
        <div>{todo.title}</div>
      ))}
     
    </div>
  );
}

export default App;
