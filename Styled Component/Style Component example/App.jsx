import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from "react";
import { Button } from './components/Button';

function App() {
  
  return (
    <div className="App">
    <h3>Count:0</h3>
    <Button />
    <Button />
    <Button />
    
    {/* <Button onClick={() =>{
      alert("Clicked click me");
    }}>Click me</Button>
    <Button onClick={() =>{
      alert("Clicked click me");
    }}>Sign In</Button> */}
    
    </div>
  );
}


export default App;
