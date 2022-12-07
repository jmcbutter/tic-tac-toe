export default function Game(players) {
  let state = {
    players,
  };

  // THE STARTING PLAYER FOR THE ROUND IS X ON ODD ROUNDS, O ON EVEN

  function startNewGame() {
    state.currentPlayer = getPlayerByIcon("x");
    state.round = 1;
  }

  function getPlayerByIcon(icon) {
    return state.players.filter((player) => player.getIcon() == icon)[0];
  }

  function startNewRound() {
    const nextRoundStartingIcon = determineStartingIcon(state.round + 1);
    const nextRoundStartingPlayer = getPlayerByIcon(nextRoundStartingIcon);

    setCurrentPlayer(nextRoundStartingPlayer);
    moveToNextRound();
  }

  function getState() {
    return state;
  }

  function setCurrentPlayer(player) {
    state.currentPlayer = player;
  }

  function determineStartingIcon(round) {
    return round % 2 == 0 ? "o" : "x";
  }

  function moveToNextTurn() {
    const { players, currentPlayer } = state;
    const nextPlayer = players.filter((player) => player != currentPlayer)[0];

    setCurrentPlayer(nextPlayer);
  }

  function moveToNextRound() {
    state.round++;
  }

  return {
    getState,
    startNewGame,
    startNewRound,
    moveToNextTurn,
  };
}
