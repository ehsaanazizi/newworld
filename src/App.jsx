
import { useEffect, useState } from "react";
// import { allCharacters} from "../data/data";
import "./App.css";
import CharacterDetail from "./Components/CharacterDetail";
import CharacterList from "./Components/CharacterList";
import Navbar from "./Components/Navbar";
import axios from "axios";


function App(){
const [ characters , setCharacters]=useState([]);
const [loading , setLoading]=useState(false);

  useEffect(()=>{
    async function fetchData(){
      try{
        setLoading(true)
        const res = await axios.get("https://rickandmortyapi.com/api/character");
        setCharacters (res.data.results.slice(0,6) )     }
        catch(error){
          console.error("خطا در دریافت داده‌ها:", error);
        }
        finally{
          setLoading(false)
        }
    }
    fetchData()
  } , [])
  return (
  <div className="app">
    <Navbar />
    <div className="main">
      <CharacterList  characters={characters}/>
      <CharacterDetail  />
    </div>
  </div>
  );
}

export default App;