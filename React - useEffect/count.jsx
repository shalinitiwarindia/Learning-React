import React from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div className="App">
      <h3>Count:{count}</h3>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
}
