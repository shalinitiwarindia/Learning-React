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
|| method
import logo from './logo.svg';
import './App.css';

function App() {

  const arr =[
    {name:"HTC",style:"circle"},
    {name:"Micromax",style:"disc"},
    {name:"Samsung",style:"square"},
    {name:"Apple",style:"Circle"}
  ];
  const arr2 =['Android','Blackberry','iPhone','windows'];

  return (
    <div className="App">
      <h1>Mobile Manufactures</h1>
     {arr.map((el)=>(
      <li className={el.style}>{el.name}</li>
     )
     
     )}
     <h1>Mobile Operating System</h1>
     {arr2.map((el)=>(
      <li>{el}</li>
     ))}
    </div>
  );
}

export default App;
