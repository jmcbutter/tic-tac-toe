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
