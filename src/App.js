import './App.css';
import React, {useState, useEffect} from 'react';
import Pokeman from './Pokeman';



function App() {

  const [page, setPage] = useState(1);
  const [pokemonData, setPokemonData] = useState([])
  const [currUrl, setCurrUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=9')
  //Examine pokemonData to set the below states (Hint: It may be a good idea to execute this in the useEffect)
  const [nextUrl, setNextUrl] = useState("")
  const [prevUrl, setPrevUrl] = useState("")


  useEffect(() => {
    fetch(currUrl)
      .then(res => res.json())
      .then(data => {
        setPokemonData(data.results)
      })

  },[currUrl])

  // Use the below click handlers to update currUrl, nextUrl, and prevUrl;
  const handleNextClick = () => console.log(currUrl)
  const handlePrevClick = () => console.log(currUrl)


  return (
    <div className="App">
      <ul>
        {/* pass page as a prop to Pokeman to allow the child of Pokeman to use it */}
      {pokemonData.map(data => <Pokeman key={data.name} name={data.name} url= {data.url}/>)}
      </ul>
      {/*Connect proper click handlers to each button
        once that is working, add logic to not allow user to click either button if there is no previous or next page (aka you are on page 1, the previous button does not function) 
        HINT: use a ternary*/}
      <button>PREV</button>
      <button>NEXT</button>
    </div>
  );
}

export default App;
/*
Stretch Goals
-Add a Details component for when you click on a pokeman a new render causes a detailed view of the clicked pokeman
-Beautify your SPA using CSS (Try with out Tailwind, MUI, Bootstrap, then refactor to use one of the previously mentioned libraries.)

*/