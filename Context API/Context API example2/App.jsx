import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import {Card} from './components/Body/Card';
import { LangContext } from './contexts/LanguageContext'
function App() {
  const {handleLang} = useContext(LangContext);
  const [count, setCount] = useState(0)

  return (
    <>
    <button 
    onClick={()=> {
      handleLang();
    }}
    >Change Language</button>
   <Navbar/>
   <Card/>
    </>
  );
   
}

export default App;
