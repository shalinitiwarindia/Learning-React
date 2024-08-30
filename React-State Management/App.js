import "./styles.css";

export default function App() {
  
  return (
    <div className="App">
    <First />
    <Second />
    </div>
  );
}
function First(){
  return <div>First Child</div>;
}
function Second(){
  return <div>Second Child</div>;
}
