import { useState } from "react";
import StartGameButtons from "../1-molecules/StartGameButtons";
import PlayerIconSelection from "../1-molecules/PlayerIconSelection";
import { Icon } from "../0-atoms";
import { Logo } from "../../assets";

function StartingScreen({ setGame }) {
  const [icon, setIcon] = useState("x");

  return (
    <div>
      <Icon icon={Logo} style={{ marginBottom: "2.8rem", height: "2.25rem" }} />
      <PlayerIconSelection icon={icon} setIcon={setIcon} />
      <StartGameButtons icon={icon} setGame={setGame} />
    </div>
  );
}

export default StartingScreen;
