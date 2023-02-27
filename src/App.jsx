import { useEffect, useState } from 'react'
import './App.css'
import CreateDivGame from './components/CreateDivGame';

const GAME_API = 'https://mmo-games.p.rapidapi.com/games';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'ec04978179msh9a8e9c12b95184ep12c2dajsn5d4cc5140ae6',
    'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com',
  },
};

function App() {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataApi = async () => {
    const apiResult = await fetch(GAME_API, options);
    const newDate = await apiResult.json();
    const datas = await newDate;
    setData(datas);
  }; dataApi()
  },[]);

  return (
    <div className="App">
    {data.map((game, index) => <CreateDivGame key={index}game={game} /> ) }
    </div>
  )
};

export default App
