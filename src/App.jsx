
import { allCharacters} from "../data/data";
import "./App.css";
import CharacterDetail from "./Components/CharacterDetail";
import CharacterList from "./Components/CharacterList";
import Navbar from "./Components/Navbar";

function App(){
  return (
  <div className="app">
    <Navbar />
    <div className="main">
      <CharacterList  characters={allCharacters}/>
      <CharacterDetail  />
    </div>
  </div>
  );
}

export default App;