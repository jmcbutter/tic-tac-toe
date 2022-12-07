export default function Board() {
  let state = {};

  function getState() {
    return state;
  }

  function reset() {
    state = {};
  }

  function isFull() {
    return Object.keys(state).length === 9;
  }

  function makeSelection({ position, player }) {
    if (state[position])
      throw new Error("That Square Has Already Been Chosen!");

    state[position] = player.getId();
  }

  function getWinningSquares() {
    let squares = [];

    // Rows
    if (squaresAreTheSame(["00", "01", "02"])) squares.push("00", "01", "02");
    if (squaresAreTheSame(["10", "11", "12"])) squares.push("10", "11", "12");
    if (squaresAreTheSame(["20", "21", "22"])) squares.push("20", "21", "22");

    // Columns
    if (squaresAreTheSame(["00", "10", "20"])) squares.push("00", "10", "20");
    if (squaresAreTheSame(["01", "11", "21"])) squares.push("01", "11", "21");
    if (squaresAreTheSame(["02", "12", "22"])) squares.push("02", "12", "22");

    // Diagonal
    if (squaresAreTheSame(["00", "11", "22"])) squares.push("00", "11", "22");
    if (squaresAreTheSame(["02", "11", "20"])) squares.push("02", "11", "20");

    return [...new Set(squares)].sort();
  }

  function squaresAreTheSame([s0, s1, s2]) {
    return (state[s0] == state[s1]) == state[s2] && state[s0];
  }

  return {
    getState,
    isFull,
    makeSelection,
    getWinningSquares,
    reset,
  };
}
