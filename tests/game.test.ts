import Game from "../types/Game";

test('Create game', () => {
  const game = new Game('Bob', 'Alice');
  expect(game.player1.name).toBe('Bob');
  expect(game.player2.name).toBe('Alice');
  expect(game.stock.size()).toBe(28);
});

test('Initialize game', () => {
  const game = new Game('Bob', 'Alice');
  const originalStock = [...game.stock.tiles];
  game.initialize();
  expect(game.stock.tiles).not.toBe(originalStock);
  expect(game.stock.size()).toBe(13);
  expect(game.player1.hand).toHaveLength(7);
  expect(game.player2.hand).toHaveLength(7);
  expect(game.board?.line).toHaveLength(1);
});
