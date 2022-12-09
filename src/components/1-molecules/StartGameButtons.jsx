import "./StartGameButtons.scss";
import { Button } from "../0-atoms/index.js";
import Player from "../../utils/Player.js";
import Game from "../../utils/Game.js";

function StartGameButtons({ icon, setGame }) {
  function onNewGameVsCPUClick() {
    const player2Icon = icon == "x" ? "o" : "x";
    const player1 = Player(1, "YOU", icon, false);
    const player2 = Player(2, "CPU", player2Icon, true);

    let game = Game();
    game.setPlayers([player1, player2]);
    game.startNewGame();

    setGame(game);
  }

  function onNewGameVsPlayerClick() {
    const player2Icon = icon == "x" ? "o" : "x";
    const player1 = Player(1, "P1", icon, false);
    const player2 = Player(2, "P2", player2Icon, false);

    let game = Game();
    game.setPlayers([player1, player2]);
    game.startNewGame();

    setGame(game);
  }

  return (
    <div className="start-game-buttons">
      <Button
        width="100%"
        size="large"
        color="orange"
        onClick={onNewGameVsCPUClick}
      >
        New Game (Vs CPU)
      </Button>
      <Button
        width="100%"
        size="large"
        color="cyan"
        onClick={onNewGameVsPlayerClick}
      >
        New Game (Vs Player)
      </Button>
    </div>
  );
}

export default StartGameButtons;
