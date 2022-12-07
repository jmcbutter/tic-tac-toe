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
  const selection = { position: "00", player: player1 };
  const board = Board();
  board.makeSelection(selection);
  expect(board.getState()).toStrictEqual({
    "00": 1,
  });
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
    { position: "00", player: player1 },
    { position: "01", player: player1 },
    { position: "02", player: player1 },
  ];
  const board = Board();
  selections.forEach((selection) => board.makeSelection(selection));
  expect(board.getWinningSquares()).toStrictEqual(["00", "01", "02"]);
});

test("row 1 win -- board returns squares", () => {
  const selections = [
    { position: "10", player: player1 },
    { position: "11", player: player1 },
    { position: "12", player: player1 },
  ];
  const board = Board();
  selections.forEach((selection) => board.makeSelection(selection));
  expect(board.getWinningSquares()).toStrictEqual(["10", "11", "12"]);
});

test("row 2 win -- board returns squares", () => {
  const selections = [
    { position: "20", player: player1 },
    { position: "21", player: player1 },
    { position: "22", player: player1 },
  ];
  const board = Board();
  selections.forEach((selection) => board.makeSelection(selection));
  expect(board.getWinningSquares()).toStrictEqual(["20", "21", "22"]);
});

test("column 0 win -- board returns squares", () => {
  const selections = [
    { position: "00", player: player1 },
    { position: "10", player: player1 },
    { position: "20", player: player1 },
  ];
  const board = Board();
  selections.forEach((selection) => board.makeSelection(selection));
  expect(board.getWinningSquares()).toStrictEqual(["00", "10", "20"]);
});

test("column 1 win -- board returns squares", () => {
  const selections = [
    { position: "01", player: player1 },
    { position: "11", player: player1 },
    { position: "21", player: player1 },
  ];
  const board = Board();
  selections.forEach((selection) => board.makeSelection(selection));
  expect(board.getWinningSquares()).toStrictEqual(["01", "11", "21"]);
});

test("column 2 win -- board returns squares", () => {
  const selections = [
    { position: "02", player: player1 },
    { position: "12", player: player1 },
    { position: "22", player: player1 },
  ];
  const board = Board();
  selections.forEach((selection) => board.makeSelection(selection));
  expect(board.getWinningSquares()).toStrictEqual(["02", "12", "22"]);
});

test("diagonal 0 win -- board returns squares", () => {
  const selections = [
    { position: "00", player: player1 },
    { position: "11", player: player1 },
    { position: "22", player: player1 },
  ];
  const board = Board();
  selections.forEach((selection) => board.makeSelection(selection));
  expect(board.getWinningSquares()).toStrictEqual(["00", "11", "22"]);
});

test("diagonal 1 win -- board returns squares", () => {
  const selections = [
    { position: "02", player: player1 },
    { position: "11", player: player1 },
    { position: "20", player: player1 },
  ];
  const board = Board();
  selections.forEach((selection) => board.makeSelection(selection));
  expect(board.getWinningSquares()).toStrictEqual(["02", "11", "20"]);
});

test("corner win with row and column -- board returns squares", () => {
  const selections = [
    { position: "00", player: player1 },
    { position: "01", player: player1 },
    { position: "02", player: player1 },
    { position: "10", player: player1 },
    { position: "20", player: player1 },
  ];
  const board = Board();
  selections.forEach((selection) => board.makeSelection(selection));
  expect(board.getWinningSquares()).toStrictEqual([
    "00",
    "01",
    "02",
    "10",
    "20",
  ]);
});

test("broken row -- board returns empty squares", () => {
  const selections = [
    { position: "00", player: player1 },
    { position: "01", player: player2 },
    { position: "02", player: player1 },
  ];
  const board = Board();
  selections.forEach((selection) => board.makeSelection(selection));
  expect(board.getWinningSquares()).toStrictEqual([]);
});

test("only two in a row -- board returns empty squares", () => {
  const selections = [
    { position: "00", player: player1 },
    { position: "01", player: player1 },
  ];
  const board = Board();
  selections.forEach((selection) => board.makeSelection(selection));
  expect(board.getWinningSquares()).toStrictEqual([]);
});

test("board can reset", () => {
  const selection = { position: "00", player: player1 };
  const board = Board();
  board.makeSelection(selection);

  board.reset();
  expect(board.getState()).toStrictEqual({});
});

test("checking the board to see if it is full returns true when full", () => {
  const selections = [
    { position: "00", player: player1 },
    { position: "01", player: player1 },
    { position: "02", player: player2 },
    { position: "10", player: player2 },
    { position: "11", player: player2 },
    { position: "12", player: player1 },
    { position: "20", player: player1 },
    { position: "21", player: player1 },
    { position: "22", player: player2 },
  ];
  const board = Board();
  selections.forEach((selection) => board.makeSelection(selection));
  expect(board.isFull()).toStrictEqual(true);
});

test("checking the board to see if it is full returns false when not", () => {
  const selections = [
    { position: "00", player: player1 },
    { position: "01", player: player1 },
    { position: "02", player: player2 },
    { position: "10", player: player2 },
    { position: "11", player: player2 },
    { position: "12", player: player1 },
    { position: "20", player: player1 },
    { position: "21", player: player1 },
  ];
  const board = Board();
  selections.forEach((selection) => board.makeSelection(selection));
  expect(board.isFull()).toBe(false);
});
