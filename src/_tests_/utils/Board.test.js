import Board from "../../utils/Board";

const player1 = {
  id: 1,
  getId() {
    return this.id;
  },
};
const player2 = {
  id: 2,
  getId() {
    return this.id;
  },
};

test("board updates when a selection is made", () => {
  const selection = { position: 0, player: player1 };
  const board = Board();
  board.makeSelection(selection);
  expect(board.getSquares()).toStrictEqual([player1, , , , , , , , ,]);
});

test("board returns an error when a selected square already has a value", () => {
  const validSelection = { position: "00", player: player1 };
  const invalidSelection = { position: "00", player: player2 };
  const board = Board();
  board.makeSelection(validSelection);
  expect(() => board.makeSelection(invalidSelection)).toThrow(
    "That Square Has Already Been Chosen!"
  );
});

test("row 0 win -- board returns squares", () => {
  const selections = [
    { position: 0, player: player1 },
    { position: 1, player: player1 },
    { position: 2, player: player1 },
  ];
  const board = Board();
  selections.forEach((selection) => board.makeSelection(selection));
  expect(board.getWinningSquares()).toStrictEqual([0, 1, 2]);
});

test("row 1 win -- board returns squares", () => {
  const selections = [
    { position: 3, player: player1 },
    { position: 4, player: player1 },
    { position: 5, player: player1 },
  ];
  const board = Board();
  selections.forEach((selection) => board.makeSelection(selection));
  expect(board.getWinningSquares()).toStrictEqual([3, 4, 5]);
});

test("row 2 win -- board returns squares", () => {
  const selections = [
    { position: 6, player: player1 },
    { position: 7, player: player1 },
    { position: 8, player: player1 },
  ];
  const board = Board();
  selections.forEach((selection) => board.makeSelection(selection));
  expect(board.getWinningSquares()).toStrictEqual([6, 7, 8]);
});

test("column 0 win -- board returns squares", () => {
  const selections = [
    { position: 0, player: player1 },
    { position: 3, player: player1 },
    { position: 6, player: player1 },
  ];
  const board = Board();
  selections.forEach((selection) => board.makeSelection(selection));
  expect(board.getWinningSquares()).toStrictEqual([0, 3, 6]);
});

test("column 1 win -- board returns squares", () => {
  const selections = [
    { position: 1, player: player1 },
    { position: 4, player: player1 },
    { position: 7, player: player1 },
  ];
  const board = Board();
  selections.forEach((selection) => board.makeSelection(selection));
  expect(board.getWinningSquares()).toStrictEqual([1, 4, 7]);
});

test("column 2 win -- board returns squares", () => {
  const selections = [
    { position: 2, player: player1 },
    { position: 5, player: player1 },
    { position: 8, player: player1 },
  ];
  const board = Board();
  selections.forEach((selection) => board.makeSelection(selection));
  expect(board.getWinningSquares()).toStrictEqual([2, 5, 8]);
});

test("diagonal 0 win -- board returns squares", () => {
  const selections = [
    { position: 0, player: player1 },
    { position: 4, player: player1 },
    { position: 8, player: player1 },
  ];
  const board = Board();
  selections.forEach((selection) => board.makeSelection(selection));
  expect(board.getWinningSquares()).toStrictEqual([0, 4, 8]);
});

test("diagonal 1 win -- board returns squares", () => {
  const selections = [
    { position: 2, player: player1 },
    { position: 4, player: player1 },
    { position: 6, player: player1 },
  ];
  const board = Board();
  selections.forEach((selection) => board.makeSelection(selection));
  expect(board.getWinningSquares()).toStrictEqual([2, 4, 6]);
});

test("corner win with row and column -- board returns squares", () => {
  const selections = [
    { position: 1, player: player1 },
    { position: 2, player: player1 },
    { position: 3, player: player1 },
    { position: 6, player: player1 },
    { position: 0, player: player1 },
  ];
  const board = Board();
  selections.forEach((selection) => board.makeSelection(selection));
  expect(board.getWinningSquares()).toStrictEqual([0, 1, 2, 3, 6]);
});

test("broken row -- board returns empty squares", () => {
  const selections = [
    { position: 0, player: player1 },
    { position: 1, player: player2 },
    { position: 2, player: player1 },
  ];
  const board = Board();
  selections.forEach((selection) => board.makeSelection(selection));
  expect(board.getWinningSquares()).toStrictEqual([]);
});

test("only two in a row -- board returns empty squares", () => {
  const selections = [
    { position: 0, player: player1 },
    { position: 1, player: player1 },
  ];
  const board = Board();
  selections.forEach((selection) => board.makeSelection(selection));
  expect(board.getWinningSquares()).toStrictEqual([]);
});

test("board can reset", () => {
  const selection = { position: 0, player: player1 };
  const board = Board();
  board.makeSelection(selection);

  board.reset();
  expect(board.getSquares()).toStrictEqual([, , , , , , , , ,]);
});

test("checking the board to see if it is full returns true when full", () => {
  const selections = [
    { position: 0, player: player1 },
    { position: 1, player: player1 },
    { position: 2, player: player2 },
    { position: 3, player: player2 },
    { position: 4, player: player2 },
    { position: 5, player: player1 },
    { position: 6, player: player1 },
    { position: 7, player: player1 },
    { position: 8, player: player2 },
  ];
  const board = Board();
  selections.forEach((selection) => board.makeSelection(selection));
  expect(board.isFull()).toBe(true);
});

test("checking the board to see if it is full returns false when not", () => {
  const selection = { position: 0, player: player1 };
  const board = Board();
  board.makeSelection(selection);
  expect(board.isFull()).toBe(false);
});
