import './App.css';
import { useEffect, useState } from 'react';



function App() {

  useEffect(() => {
    getInfo();
  }, []);

  const [info, setInfo] = useState([]);

  async function getInfo() {
    const fetched = await fetch('http://localhost:3001/')
    const result = await fetched.json()
    // console.log("Result: ", result)
    setInfo(result);
  }




  return (
    <div className="App">
      <header className="App-header">
        <h1>Oh boy Rick, we made it!</h1>
        <h3>Our names r:</h3>
        {info.map((name, index) => {
          return (
            <div key={index}>
              <p>{name.id} </p>
              <p>{name.info}</p>
            </div>
          )
        })}

      </header >
    </div >
  );
}

export default App;


