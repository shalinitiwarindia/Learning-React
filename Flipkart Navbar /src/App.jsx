import logo from './logo.svg';
import './App.css';
import { Category } from './components/category';

function App() {
const navbar=[
  {
  image:
  "https://rukminim2.flixcart.com/flap/77/77/image/29327f40e9c4d26b.png?q=100",
  title:"Grocery",
  },
  {
    image:
    "https://rukminim2.flixcart.com/flap/77/77/image/22fddf3c7da4c4f4.png?q=100",
    title:"Mobiles",
    },
    {
      image:
      "https://rukminim2.flixcart.com/fk-p-flap/77/77/image/0139228b2f7eb413.jpg?q=100",
      title:"Applience",
      },
      {
        image:
        "https://rukminim2.flixcart.com/flap/77/77/image/71050627a56b4693.png?q=100",
        title:"Travel",
        },
]
  

  return (
    <div className="nav">
     {navbar.map((el)=> (
      <Category image={el.image} label={el.title}  />))}
    </div>
  );
}

export default App;
