import { useState } from "react";
import "./App.css";
import GameScreen from "./components/4-pages/GameScreen";
import StartingScreen from "./components/4-pages/StartingScreen";
import Player from "./utils/Player";
import Game from "./utils/Game";

function App() {
  const player1 = Player(1, "YOU", "x", false);
  const player2 = Player(2, "CPU", "o", true);

  const game = Game();
  game.setPlayers([player1, player2]);
  game.startNewGame();

  return (
    <div className="App">
      <GameScreen game={game} />
      {/* {game ? <GameScreen /> : <StartingScreen setGame={setGame} />} */}
    </div>
  );
}

export default App;
