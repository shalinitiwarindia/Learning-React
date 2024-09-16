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
  return (
    <div>
      Hello {firstName}
      <button onClick={nameChange}> change name</button>
    </div>
  );
}
  // return <div className="App">
  //   <button>test</button>
  // </div>
  

export default App;
