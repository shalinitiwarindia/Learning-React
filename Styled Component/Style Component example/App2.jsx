import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from "react";
import { Button } from './components/Button';

function App() {
  
  return (
    <div className="App">
    <h3>Count:0</h3>
    {/* <Button />
    <Button />
    <Button /> */}
    
    <Button onClick={() =>{
      alert("Clicked click me");
    }}>Click me</Button>
    <Button onClick={() =>{
      alert("Clicked Sign In ");
    }}>Sign In</Button>
    
    </div>
  );
}


export default App;



//another part of coding, it includes changinmg theme button 
import "./styles.css";
import { Button } from "./components/Button";
import { useState } from "react";
export default function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <div className="App">
      <h3>Theme is: {theme}</h3>
      {/* <Button />
    <Button />
    <Button /> */}

      <Button
        onClick={() => {
          alert("Clicked click me");
        }}
      >
        Click me
      </Button>
      <Button
        onClick={() => {
          alert("Clicked Sign In ");
        }}
      >
        Sign In
      </Button>
      <Button
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        Change Theme
      </Button>
    </div>
  );
}

