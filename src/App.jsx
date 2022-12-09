import { useState } from "react";
import "./App.css";
import GameScreen from "./components/4-pages/GameScreen";
import StartingScreen from "./components/4-pages/StartingScreen";
import Player from "./utils/Player";
import Game from "./utils/Game";

function App() {
  const player1 = Player(1, "YOU", "x", false);
  const player2 = Player(2, "CPU", "o", true);

  const newGame = Game();
  newGame.setPlayers([player1, player2]);
  newGame.startNewGame();

  const [game, setGame] = useState(newGame);

  return (
    <div className="App">
      {/* <GameScreen game={game} setGame={setGame} /> */}
      {game ? (
        <GameScreen game={game} setGame={setGame} />
      ) : (
        <StartingScreen setGame={setGame} />
      )}
    </div>
  );
}

export default App;
