import "./styles.css";
import { useEffect, useState } from "react";
import { Hello } from "./components/Hello";

export default function App() {
  const [show, setShow] = useState(true);
  console.log("Before");
  useEffect(() => {
    console.log("Inside effect 1");
  });
  console.log("After");
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
