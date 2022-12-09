import { Button, Icon } from "../0-atoms";
import { Logo } from "../../assets";
import { useEffect, useState } from "react";
import "./GameScreen.scss";
import {
  XIcon,
  OIcon,
  XIconOutline,
  OIconOutline,
  Restart,
} from "../../assets";
import Board from "../../utils/Board.js";

function GameScreen({ game, setGame }) {
  const [currentPlayer, setCurrentPlayer] = useState(game.getCurrentPlayer());
  const [board, setBoard] = useState(Board());
  const [winnerExists, setWinnerExists] = useState(false);
  const [winningSquares, setWinningSquares] = useState([]);
  const [winner, setWinner] = useState();
  const [beginningOfRound, setBeginningOfRound] = useState(true);
  const [restarting, setRestarting] = useState(false);
  let [xWins, setXWins] = useState(0);
  let [oWins, setOWins] = useState(0);
  let [ties, setTies] = useState(0);

  function chooseSquare(placeIcon, getChosenSquare) {
    let chosenSquare = getChosenSquare();

    placeIcon();
    board.makeSelection({ position: chosenSquare, player: currentPlayer });

    setWinningSquares(board.getWinningSquares());
  }

  useEffect(() => {
    if (winningSquares.length > 0) {
      setWinnerExists(true);
      setWinner(currentPlayer);
      currentPlayer.addWin();
    } else if (board.isFull()) {
      setTies(ties + 1);
    } else if (!beginningOfRound) {
      game.moveToNextTurn();
      setCurrentPlayer(game.getCurrentPlayer());
    }
  }, [winningSquares]);

  useEffect(() => {
    if (winner) {
      if (winner.getIcon() == "x") setXWins(xWins + 1);
      else setOWins(oWins + 1);
    }
  }, [winner]);

  useEffect(() => {
    if (currentPlayer.isCPU) {
      const squareIndex = currentPlayer.cpuChooseSquare(board);
      const square = document.querySelector(
        `#board > .square:nth-child(${squareIndex})`
      );
      document.getElementById("board").style.pointerEvents = "none";
      setTimeout(() => {
        square.click();
      }, 500);
      setTimeout(() => {
        document.getElementById("board").style.pointerEvents = "auto";
      }, 525);
    }
  }, [currentPlayer]);

  function squareIsWinner(cellNumber) {
    return winningSquares.includes(cellNumber);
  }

  function getWinnerIcon() {
    const playerIcon = currentPlayer.getIcon();
    return (
      <Icon
        icon={playerIcon == "x" ? XIcon : OIcon}
        className="modal__winner-icon"
      />
    );
  }

  function onQuitClicked() {
    setGame();
    setBoard();
    setWinnerExists(false);
    setWinningSquares([]);
  }

  function onNextRoundClicked() {
    setBoard(Board());
    setWinnerExists(false);
    setWinner();
    setWinningSquares([]);
    setBeginningOfRound(true);
    game.startNewRound();
    setCurrentPlayer(game.getCurrentPlayer());
  }

  function resultMessage() {
    let players = game.getPlayers();
    let cpuPlayer = players.filter((player) => player.isCPU).length > 0;

    if (winnerExists) {
      if (cpuPlayer) {
        if (winner.isCPU) return "Oh no, you lost...";
        else return "You Won!";
      } else {
        if (winner.getName() == "P1") return "Player 1 Wins!";
        else return "Player 2 Wins!";
      }
    } else {
      return "";
    }
  }

  function getPlayerName(icon) {
    let players = game.getPlayers();
    let player = players.filter((player) => player.getIcon() == icon)[0];
    return player.getName();
  }

  function getCurrentPlayerIcon() {
    const icon = <Icon icon={currentPlayer.getIcon() == "x" ? XIcon : OIcon} />;
    return icon;
  }

  function showRestartModal() {
    document.querySelector("#restart-modal").classList.remove("hidden");
  }

  function hideRestartModal() {
    document.querySelector("#restart-modal").classList.add("hidden");
  }

  return (
    <div>
      <div className="top-bar">
        <Icon
          className="top-bar__icon"
          icon={Logo}
          style={{ height: "2.25rem" }}
        />
        <div className="top-bar__turn">
          {getCurrentPlayerIcon()}
          <h4>TURN</h4>
        </div>
        <div className="top-bar__restart">
          <Button size="small" color="gray" onClick={showRestartModal}>
            <Icon icon={Restart} style={{ height: "1.4rem" }} />
          </Button>
        </div>
      </div>
      <div className="board" id="board">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
          <Square
            key={num}
            cellNumber={num}
            playerIcon={currentPlayer.getIcon()}
            chooseSquare={chooseSquare}
            squareIsWinner={squareIsWinner}
            beginningOfRound={beginningOfRound}
            setBeginningOfRound={setBeginningOfRound}
          />
        ))}
      </div>

      <div className="score">
        <div className="score--x">
          <p>X ({getPlayerName("x")})</p>
          <h3>{xWins}</h3>
        </div>
        <div className="score--tied">
          <p>TIES</p>
          <h3>{ties}</h3>
        </div>
        <div className="score--o">
          <p>O ({getPlayerName("o")})</p>
          <h3>{oWins}</h3>
        </div>
      </div>

      <div
        className={`modal ${winnerExists || board.isFull() ? "" : "hidden"}`}
      >
        <div className="modal__container">
          <h4 className="modal__result">{resultMessage()}</h4>
          <div
            className="modal__winner"
            style={{
              color:
                currentPlayer.getIcon() == "x"
                  ? "var(--cyan)"
                  : "var(--orange)",
            }}
          >
            {winnerExists ? getWinnerIcon() : null}
            <h1>{winnerExists ? "Takes the Round" : "Round Tied"}</h1>
          </div>
          <div className="modal__buttons">
            <Button size="small" color="gray" onClick={onQuitClicked}>
              Quit
            </Button>
            <Button size="small" color="orange" onClick={onNextRoundClicked}>
              Next Round
            </Button>
          </div>
        </div>
      </div>

      <div className="modal hidden" id="restart-modal">
        <div className="modal__container">
          <div className="modal__winner">
            <h1>Restart Game?</h1>
          </div>
          <div className="modal__buttons">
            <Button size="small" color="gray" onClick={hideRestartModal}>
              No, Cancel
            </Button>
            <Button size="small" color="orange" onClick={onQuitClicked}>
              Yes, Restart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Square(props) {
  const {
    cellNumber,
    children,
    playerIcon,
    chooseSquare,
    squareIsWinner,
    beginningOfRound,
    setBeginningOfRound,
    ...restProps
  } = props;

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
    setBeginningOfRound(false);
  }

  useEffect(() => {
    if (beginningOfRound) {
      setPlacedIcon();
    }
  }, [beginningOfRound]);

  return (
    <div
      {...restProps}
      className={`square ${squareIsWinner(cellNumber) ? "square--winner" : ""}`}
      onMouseOver={showIconOutline}
      onMouseOut={removeIconOutline}
      onClick={onClick}
      style={{
        "--color": playerIcon == "x" ? "var(--cyan)" : "var(--orange)",
        "--color-shadow":
          playerIcon == "x" ? "var(--cyan-shadow)" : "var(--orange-shadow)",
      }}
    >
      {placedIcon ? placedIcon : hoverIcon}
    </div>
  );
}

export default GameScreen;
