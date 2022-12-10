export default function Player(id, name, icon, isCPU) {
  let wins = 0;

  function getId() {
    return id;
  }

  function getName() {
    return name;
  }

  function getIcon() {
    return icon;
  }

  function addWin() {
    wins++;
  }

  function getWins() {
    return wins;
  }

  function cpuChooseSquare(board) {
    const emptyIndices = [];
    console.log(board.getSquares());
    Array.apply(null, board.getSquares()).forEach((sq, ind) => {
      if (!sq) emptyIndices.push(ind + 1);
    });
    console.log(emptyIndices);
    return emptyIndices[0];
  }

  function minimax(boardCopy, emptyIndices, maximizingPlayer) {
    const winningSquares = boardCopy.getWinningSquares();

    if (winningSquares[0].getIcon() == icon) return { score: 10 };
    else if (winningSquares.length > 0) return { score: -10 };
    else if (emptyIndices.length == 0) return { score: 0 };

    emptyIndices.forEach((i) => {
      let move = {};
      move.index = boardCopy.getSquares()[emptyIndices[i]];

      boardCopy.makeSelection({ position: i, player: maximizingPlayer });
    });

    if (maximizingPlayer) {
      let maxEv = -Infinity;
      emptyIndices.forEach((index) => {
        const ev = minimax(boardCopy, emptyIndices, false);
        maxEv = max(maxEv, ev);
      });
    } else {
      let minEv = -Infinity;
      emptyIndices.forEach((index) => {
        const ev = minimax(boardCopy, emptyIndices, true);
        minEv = min(minEv, ev);
      });
    }
  }

  return {
    isCPU,
    getId,
    getName,
    getIcon,
    addWin,
    getWins,
    cpuChooseSquare,
  };
}
