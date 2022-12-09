import { useState } from "react";
import "./App.css";
import GameScreen from "./components/4-pages/GameScreen";
import StartingScreen from "./components/4-pages/StartingScreen";

function App() {
  const [game, setGame] = useState();

  return (
    <div className="App">
      {game ? (
        <GameScreen game={game} setGame={setGame} />
      ) : (
        <StartingScreen setGame={setGame} />
      )}
    </div>
  );
}

export default App;
