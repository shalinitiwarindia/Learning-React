import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const elem = React.createElement(
  "button",
  { onClick: () => alert("oops") },
  "CLICK ME"
);

const elemWithJSX = <button onClick={() => alert("with jsx")}>Click Me</button>;

function Button(props) {
  return <button onClick={() => props?.handleClick()}>{props.title}</button>;
}

const MyApp = React.createElement("div", {}, [
  elem,
  elemWithJSX,
  Button({ title: "Hello", handleClick: () => alert("1") }),
  Button({ title: "Hello2", handleClick: () => alert("2") }),
  Button({ title: "Hello3", handleClick: () => alert("3") }),
]);
root.render(MyApp);
