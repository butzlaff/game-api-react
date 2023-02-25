import { useState } from 'react'
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

const dataApi = async () => {
  const apiResult = await fetch(GAME_API, options);
  const newDate = await apiResult.json();
  const datas = await newDate;
  return datas;
};

function App() {
  
  const [data, setData] = useState([]);
  
  const setDataApi = async () => {
    setData(await dataApi());
  }

  // let results = [];

  setDataApi();

  return (
    <div className="App">
    {/* {data.forEach((game, index) => {
      results = [...results,  <CreateDivGame game={game} index={index} />]
    })}
    {results} */}
    {data.map((game, index) => <CreateDivGame game={game} index={index} /> ) }
    </div>
  )
}

export default App
