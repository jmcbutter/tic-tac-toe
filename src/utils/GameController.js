import Game from "./Game";
import Board from "./Board";

export default function GameController(players) {
  const game = Game();
  const board = Board();
  // const view = View();

  function updateBoard(position) {
    const gameState = game.getState();

    let selection = {
      position,
      player: gameState.currentPlayer,
    };

    board.makeSelection(selection);
  }

  return {
    updateBoard,
  };
}
