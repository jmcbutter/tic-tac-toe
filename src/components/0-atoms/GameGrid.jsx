import "./GameGrid.scss";
import Square from "./Square";
import { useState } from "react";
import Board from "../../utils/Board.js";

function GameGrid(props) {
  const { game, winners, setWinners, ...restProps } = props;
  const [currentPlayer, setCurrentPlayer] = useState(game.getCurrentPlayer());
  const [board, setBoard] = useState(Board());

  return (
    <div className="game-grid" id="game-grid">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
        <Square
          key={value}
          cellNumber={value}
          game={game}
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
          board={board}
          setWinners={setWinners}
          winner={winners.includes(value) ? true : false}
        />
      ))}
    </div>
  );
}

export default GameGrid;
