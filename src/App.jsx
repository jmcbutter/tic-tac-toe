import { useState } from "react";
import "./App.css";
import StartGameButtons from "./components/1-molecules/StartGameButtons";
import PlayerIconSelection from "./components/1-molecules/PlayerIconSelection";
import { Icon } from "./components/0-atoms";
import { Logo } from "./assets/index.js";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Icon icon={Logo} style={{ marginBottom: "2.8rem" }} />
      <PlayerIconSelection />
      <StartGameButtons />
    </div>
  );
}

export default App;
