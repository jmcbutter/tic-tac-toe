import { Icon } from "../0-atoms";
import { Logo } from "../../assets";
import { useState } from "react";
import "./GameScreen.scss";
import { XIcon, OIcon, XIconOutline, OIconOutline } from "../../assets";
import Board from "../../utils/Board.js";

function GameScreen({ game }) {
  const [currentPlayer, setCurrentPlayer] = useState(game.getCurrentPlayer());
  const [board, setBoard] = useState(Board());
  const [winnerExists, setWinnerExists] = useState(false);

  function chooseSquare(placeIcon, getChosenSquare) {
    let chosenSquare = getChosenSquare();

    placeIcon();
    board.makeSelection({ position: chosenSquare, player: currentPlayer });

    let winningSquares = board.getWinningSquares();

    if (winningSquares.length > 0) {
      console.log(winningSquares);
      setWinnerExists(true);
    } else {
      game.moveToNextTurn();
      setCurrentPlayer(game.getCurrentPlayer());
    }
  }

  return (
    <div>
      <Icon icon={Logo} style={{ marginBottom: "2.8rem", height: "2.25rem" }} />
      <div className="board">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
          <Square
            key={num}
            cellNumber={num}
            playerIcon={currentPlayer.getIcon()}
            chooseSquare={chooseSquare}
          />
        ))}
      </div>
      <div className={`modal ${winnerExists ? "" : "hidden"}`}></div>
    </div>
  );
}

function Square(props) {
  const { cellNumber, children, playerIcon, chooseSquare, ...restProps } =
    props;

  const [hoverIcon, setHoverIcon] = useState();
  const [placedIcon, setPlacedIcon] = useState();

  function showIconOutline() {
    const icon = (
      <Icon
        icon={playerIcon == "x" ? XIconOutline : OIconOutline}
        className="square__hover-icon"
        style={{
          "--stroke-color": playerIcon == "x" ? "var(--cyan)" : "var(--orange)",
          fill: "none",
        }}
      />
    );
    setHoverIcon(icon);
  }

  function removeIconOutline() {
    setHoverIcon();
  }

  function placeIcon() {
    const icon = (
      <Icon
        icon={playerIcon == "x" ? XIcon : OIcon}
        className="square__hover-icon"
        style={{
          "--fill-color": playerIcon == "x" ? "var(--cyan)" : "var(--orange)",
        }}
      />
    );
    setPlacedIcon(icon);
  }

  function getChosenSquare() {
    return cellNumber;
  }

  function onClick() {
    if (!placedIcon) {
      chooseSquare(placeIcon, getChosenSquare);
    }
  }

  return (
    <div
      {...restProps}
      className="square"
      onMouseOver={showIconOutline}
      onMouseOut={removeIconOutline}
      onClick={onClick}
    >
      {placedIcon ? placedIcon : hoverIcon}
    </div>
  );
}

export default GameScreen;
