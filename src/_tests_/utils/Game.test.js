import Game from "../../utils/Game";

const player1 = {
  id: 1,
  wins: 0,
  icon: "x",

  getId() {
    return this.id;
  },

  addWin() {
    this.wins++;
  },

  getIcon() {
    return this.icon;
  },

  getWins() {
    return this.wins;
  },
};
const player2 = {
  id: 2,
  wins: 0,
  icon: "o",

  getId() {
    return this.id;
  },

  getIcon() {
    return this.icon;
  },

  addWin() {
    this.wins++;
  },

  getWins() {
    return this.wins;
  },
};

const players = [player1, player2];

test("game changes to player 2's turn from player 1", () => {
  const game = Game();
  game.setPlayers(players);
  game.startNewGame();
  game.moveToNextTurn();
  expect(game.getCurrentPlayer()).toStrictEqual(player2);
});

test("game changes to player 1's turn from player 2", () => {
  const game = Game();
  game.setPlayers(players);
  game.startNewGame();
  game.moveToNextTurn();
  game.moveToNextTurn();
  expect(game.getCurrentPlayer()).toStrictEqual(player1);
});

test("start a new round", () => {
  const game = Game();
  game.setPlayers(players);
  game.startNewGame();
  game.startNewRound();
  expect(game.getRound()).toBe(2);
});

test("game resets", () => {
  const game = Game();
  game.setPlayers(players);
  game.startNewGame();
  game.startNewRound();
  game.startNewGame();
  expect(game.getRound()).toBe(1);
});
