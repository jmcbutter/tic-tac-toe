import "./PlayerIconSelection.scss";
import { XIcon, OIcon } from "../../assets";
import Icon from "../0-atoms/Icon";

function PlayerIconSelection({ icon, setIcon, ...restProps }) {
  function onIconSelection(e) {
    const parent = e.target.parentElement;
    const children = Array.from(parent.children);

    children.forEach((child) =>
      child.classList.toggle("player-icon-selection__button--selected")
    );

    if (icon === "x") setIcon("o");
    else setIcon("x");
  }

  return (
    <div {...restProps} className="player-icon-selection">
      <h4 className="player-icon-selection__prompt">Pick Player 1's Mark</h4>
      <div className="player-icon-selection__switch">
        <button
          onClick={onIconSelection}
          className="player-icon-selection__button player-icon-selection__button--selected"
        >
          <Icon icon={XIcon} className="player-icon-selection__icon" />
        </button>
        <button
          onClick={onIconSelection}
          className="player-icon-selection__button"
        >
          <Icon icon={OIcon} className="player-icon-selection__icon" />
        </button>
      </div>
      <p className="player-icon-selection__hint">Remember: X Goes First</p>
    </div>
  );
}

export default PlayerIconSelection;
