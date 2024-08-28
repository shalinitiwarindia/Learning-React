import "./styles.css";
import { useState } from "react";
export default function App() {
  const [counter, setCounter] = useState(10);
  return (
    <div className="App">
      <h3>Counter:{counter}</h3>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Add 1
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Sub 1
      </button>
    </div>
  );
}
