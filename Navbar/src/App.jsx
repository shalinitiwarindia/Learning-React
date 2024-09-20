//import logo from './logo.svg';
import './App.css';
//import { Category } from './components/category';

function App() {

const components=["Services","Projects","Assignment"];

  return (
    
    <div className="nav">
      <div>
        LOGOBAKERY
      </div>
     {components.map((e)=>{
    return <Component component={e}/>;
  })}
      
    
       <div><button>Contact</button></div>
   
    </div>
  );
}
function Component({component}){
 return <p> {component}</p>;
}

export default App;
