import { useState } from "react";
import "./PlayerIconSelection.scss";
import { XIcon, OIcon } from "../../assets";
import Icon from "../0-atoms/Icon";

function PlayerIconSelection() {
  const [count, setCount] = useState(0);

  return (
    <div className="player-icon-selection">
      <h4 className="player-icon-selection__prompt">Pick Player 1's Mark</h4>
      <div className="player-icon-selection__switch">
        <div className="player-icon-selection__icon player-icon-selection__icon--highlighted">
          <Icon icon={XIcon} />
        </div>
        <div className="player-icon-selection__icon">
          <Icon icon={OIcon} />
        </div>
      </div>
      <p className="player-icon-selection__hint">Remember: X Goes First</p>
    </div>
  );
}

export default PlayerIconSelection;
