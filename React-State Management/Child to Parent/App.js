import "./styles.css";

export default function App() {
  const handleChange = (value) => {
    console.log("hello", value);
  };
  return First(handleChange);
}
function First(handleChange) {
  const data = "test";
  handleChange(data);
}
