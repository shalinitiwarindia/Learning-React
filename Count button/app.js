import "./styles.css";
import { useState } from "react";
export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <h3>Counter:{counter}</h3>
      
   
