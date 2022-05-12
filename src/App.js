import logo from './logo.svg';
import './App.css';
import { useEffect, useState} from 'react';
import './harrypotter';
import { Characters } from './harrypotter'

function App() {
  //const [data, setData] = useState([]);
  const [data, setData] = useState([])
  const fetchData = () => {
    fetch('http://hp-api.herokuapp.com/api/characters/')
    .then(res => res.json())
    .then(data => setData(data))
  }
  
  useEffect(fetchData, [])
  console.log('this is the data', data.Characters);
  
  return (
    <div className="App">
      <h1>Harry Potter Characters</h1>
          {data.map(element => (
            <Characters name ={element.name} actor={element.actor} house={element.house} ancestory={element.ancestory} image={element.image} key={element.dateOfBirth}/>
          ))}

          
    </div>
  );
}

export default App;
