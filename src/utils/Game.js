export default function Game() {
  let players;
  let currentPlayer;
  let round;

  function getPlayers() {
    return players;
  }

  function getCurrentPlayer() {
    return currentPlayer;
  }

  function getRound() {
    return round;
  }

  function startNewGame() {
    currentPlayer = getPlayerByIcon("x");
    round = 1;
  }

  function setPlayers(gamePlayers) {
    players = gamePlayers;
  }

  function getPlayerByIcon(icon) {
    return players.filter((player) => player.getIcon() == icon)[0];
  }

  function startNewRound() {
    const nextRoundStartingIcon = determineStartingIcon(round + 1);
    const nextRoundStartingPlayer = getPlayerByIcon(nextRoundStartingIcon);

    setCurrentPlayer(nextRoundStartingPlayer);
    moveToNextRound();
  }

  function getState() {
    return state;
  }

  function setCurrentPlayer(player) {
    currentPlayer = player;
  }

  function determineStartingIcon(round) {
    return round % 2 == 0 ? "o" : "x";
  }

  function moveToNextTurn() {
    const nextPlayer = players.filter((player) => player != currentPlayer)[0];

    setCurrentPlayer(nextPlayer);
  }

  function moveToNextRound() {
    round++;
  }

  return {
    getState,
    getCurrentPlayer,
    getPlayers,
    getRound,
    setPlayers,
    startNewGame,
    startNewRound,
    moveToNextTurn,
  };
}
