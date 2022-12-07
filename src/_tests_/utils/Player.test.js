import Player from "../../utils/Player";

test("create player 1", () => {
  const player1 = Player(1, "P1", "x", false);
  expect(player1.getId()).toBe(1);
  expect(player1.getName()).toBe("P1");
  expect(player1.getIcon()).toBe("x");
  expect(player1.isCPU).toBe(false);
  expect(player1.getWins()).toBe(0);
});

test("add win to player 1", () => {
  const player1 = Player(1, "P1", "x", false);
  player1.addWin();
  expect(player1.getWins()).toBe(1);
});
