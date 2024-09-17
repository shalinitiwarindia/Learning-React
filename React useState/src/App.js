import { useState } from "react";


function App() {

    const [firstName, setFirstName] = useState('shyam')

  const nameChange = () => {
    if (firstName === 'shyam') {
    setFirstName('anshu')
    } else {
      setFirstName('shyam')
    }
  }

  

export default App;
