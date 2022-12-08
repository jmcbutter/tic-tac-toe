import { useState } from "react";
import Icon from "./Icon";
import "./Square.scss";
import { XIcon, OIcon, XIconOutline, OIconOutline } from "../../assets";

function Square(props) {
  const {
    cellNumber,
    game,
    currentPlayer,
    setCurrentPlayer,
    board,
    winner,
    setWinners,
    ...restProps
  } = props;
  const [hoverIcon, setHoverIcon] = useState();
  const [owner, setOwner] = useState();
  const [ownerIcon, setOwnerIcon] = useState();

  function onMouseEnter(e) {
    let currentPlayerIcon = currentPlayer.getIcon();

    currentPlayerIcon == "x"
      ? setHoverIcon(
          <Icon
            icon={XIconOutline}
            className="square__hover-icon square__hover-icon--x"
          />
        )
      : setHoverIcon(
          <Icon
            icon={OIconOutline}
            className="square__hover-icon square__hover-icon--o"
          />
        );
  }

  function onMouseLeave(e) {
    setHoverIcon();
  }

  function onClick(e) {
    if (!owner) {
      setOwner(currentPlayer);
      board.makeSelection({ position: cellNumber, player: currentPlayer });

      let currentPlayerIcon = currentPlayer.getIcon();

      currentPlayerIcon == "x"
        ? setOwnerIcon(
            <Icon icon={XIcon} className="square__icon square__icon--x" />
          )
        : setOwnerIcon(
            <Icon icon={OIcon} className="square__icon square__icon--o" />
          );

      setWinners(board.getWinningSquares());

      game.moveToNextTurn();
      setCurrentPlayer(game.getCurrentPlayer());
    }
  }

  return (
    <div
      {...restProps}
      className={`square ${winner ? "square--winner" : ""} ${
        owner ? "square--" + owner.getIcon() : ""
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {owner ? ownerIcon : hoverIcon}
    </div>
  );
}

export default Square;
