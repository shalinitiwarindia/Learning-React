import "./styles.css";
import { useState } from "react";
import { Hello } from "./components/Hello";

export default function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      {show ? <Hello /> : null}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Toggle component
      </button>
    </div>
  );
}
