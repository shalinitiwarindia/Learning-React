
import Timer from "./components/Timer";
import "./index.css";
import Todo from "./Todo";

export default function App() {
  return (
    <div className="App">
      
      <h1>React Timer</h1>
      {/* Using the Timer component with initialTime and endTime props */}
      <Timer initialTime={0} endTime={10} />
      <Todo/>
    </div>
  );
}
