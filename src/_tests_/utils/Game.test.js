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
  const game = Game(players);
  game.startNewGame();
  game.moveToNextTurn();
  expect(game.getState()).toStrictEqual({
    round: 1,
    currentPlayer: player2,
    players: players,
  });
});

test("game changes to player 1's turn from player 2", () => {
  const game = Game(players);
  game.startNewGame();
  game.moveToNextTurn();
  game.moveToNextTurn();
  expect(game.getState()).toStrictEqual({
    round: 1,
    currentPlayer: player1,
    players: players,
  });
});

test("start a new round", () => {
  const game = Game(players);
  game.startNewGame();
  game.startNewRound();
  expect(game.getState()).toStrictEqual({
    round: 2,
    currentPlayer: player2,
    players: players,
  });
});

test("game resets", () => {
  const game = Game(players);
  game.startNewGame();
  game.startNewRound();
  game.startNewGame();
  expect(game.getState()).toStrictEqual({
    round: 1,
    currentPlayer: player1,
    players: players,
  });
});
