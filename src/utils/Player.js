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

  return {
    isCPU,
    getId,
    getName,
    getIcon,
    addWin,
    getWins,
  };
}
