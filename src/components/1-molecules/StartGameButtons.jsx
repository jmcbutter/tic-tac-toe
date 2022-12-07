import { useState } from "react";
import "./StartGameButtons.scss";
import { Button } from "../0-atoms/index.js";

function StartGameButtons() {
  const [count, setCount] = useState(0);

  return (
    <div className="start-game-buttons">
      <Button width="100%" size="large" color="orange">
        New Game (Vs CPU)
      </Button>
      <Button width="100%" size="large" color="cyan">
        New Game (Vs Player)
      </Button>
    </div>
  );
}

export default StartGameButtons;
