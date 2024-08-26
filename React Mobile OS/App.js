import "./styles.css";

export default function App() {
  const phone = ["iPhone", "Blackberry", "Android", "Windows Phone"];
  const items = ["Samsung", "HTC", "Apple"];
  return (
    <div className="App">
      <h2>Mobile Operating System</h2>
      <div>
        <ul>
          {phone.map((e) => {
            return <li>{e}</li>;
          })}
        </ul>
      </div>
      <h2>Mobile Manufacturer</h2>
      <div>
        <ul>
          {items.map((e) => {
            return <li>{e}</li>;
          })}
        </ul>
      </div>
    </div>
    
  );
}
