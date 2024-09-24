import "./styles.css";
import { Button } from "./components/Button";
import { useState } from "react";
import { Flex } from "./components/Flex";
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
      <Flex>
        <div>one</div>
        <div>two</div>
        <div>three</div>
      </Flex>
    </div>
  );
}
