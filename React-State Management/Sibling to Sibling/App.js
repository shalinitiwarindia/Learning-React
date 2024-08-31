import { useState } from "react";
import "./styles.css";

export default function App() {
  const [message, setMessage] = useState("");
  const getData = (data) => {
    console.log("Got data from Child:", data);
    setMessage(data);
  };
  return (
    <div className="App">
      <First dataFn={getData} />
      <Second message={message} />
    </div>
  );
}

function First({ dataFn }) {
  const data = "Hello c1";
  return (
    <div>
      First Child
      <button
        onClick={() => {
          dataFn(data);
        }}
      >
        Send Data
      </button>
    </div>
  );
}
function Second({ message }) {
  console.log("Got data from sibling:", message);
  return <div>Second Child,{message}</div>;
}
