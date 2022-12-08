export default function Board() {
  let squares = Array(9);

  let winningComboIndices = [
    // Rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    // Columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    // Diagonals
    [0, 4, 8],
    [2, 4, 6],
  ];

  function getWinningSquares() {
    const winningSquares = [];

    winningComboIndices.forEach((indexCombo) => {
      const [sq1, sq2, sq3] = indexCombo;
      if (
        squares[sq1] &&
        squares[sq1] == squares[sq2] &&
        squares[sq2] == squares[sq3]
      ) {
        winningSquares.push(...indexCombo);
      }
    });

    return [...new Set(winningSquares)].sort();
  }

  function getSquares() {
    return squares;
  }

  function reset() {
    squares = Array(9);
  }

  function isFull() {
    return squares.filter((sq) => sq != undefined).length == 9;
  }

  function makeSelection({ position, player }) {
    if (squares[position])
      throw new Error("That Square Has Already Been Chosen!");
    else squares[position] = player;
  }

  return {
    getSquares,
    isFull,
    makeSelection,
    getWinningSquares,
    reset,
  };
}
