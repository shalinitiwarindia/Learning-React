import "./styles.css";
import { useState } from "react";
export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <h3>Counter:{counter}</h3>
      <button
        onClick={() => {
          if (counter >= 10) {
            return;
          }
          setCounter(counter + 1);
        }}
      >
        Add 1
      </button>
      <button
        onClick={() => {
          if (counter < 10) {
            return;
          }
          setCounter(counter - 1);
        }}
      >
        Sub 1
      </button>
    </div>
  );
}
      
   
