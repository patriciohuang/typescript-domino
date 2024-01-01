import Board from "../types/Board";
import Player from "../types/Player";
import Stock from "../types/Stock";
import Tile from "../types/Tile";

test('Create player', () => {
  const player = new Player('Alice');
  expect(player.name).toBe('Alice');
  expect(player.hand).toHaveLength(0);
});

test('Draw initial tile', () => {
  const player = new Player('Alice');
  player.drawInitialTiles(new Stock());
  expect(player.hand).toHaveLength(7);
});

test('Play turn and place tile in end 1 of the line', () => {
  const player = new Player('Alice');
  const stock = new Stock();
  const board = new Board(new Tile(2,3));
  player.hand = [new Tile(1, 2)];
  player.play(board, stock);
  expect(player.hand).toHaveLength(0);
  expect(board.getEnd1()).toBe(1);
  expect(board.getEnd2()).toBe(3);
});
test('Play turn and place tile in end 2 of the line', () => {
  const player = new Player('Alice');
  const stock = new Stock();
  const board = new Board(new Tile(2,3));
  player.hand = [new Tile(3, 4)];
  player.play(board, stock);
  expect(player.hand).toHaveLength(0);
  expect(board.getEnd1()).toBe(2);
  expect(board.getEnd2()).toBe(4);
});

test('Play turn, draw and then place tile', () => {
  const player = new Player('Alice');
  const stock = new Stock();
  stock.tiles = [new Tile(3,4)];
  const board = new Board(new Tile(2,3));
  player.hand = [new Tile(0, 0)];
  player.play(board, stock);
  expect(player.hand).toHaveLength(1);
  expect(board.getEnd1()).toBe(2);
  expect(board.getEnd2()).toBe(4);
});

test("Play turn, draw and can't place tile", () => {
  const player = new Player('Alice');
  const stock = new Stock();
  stock.tiles = [new Tile(1,4), new Tile(5,6)];
  const board = new Board(new Tile(2,3));
  player.hand = [new Tile(0, 0)];
  player.play(board, stock);
  expect(player.hand).toHaveLength(3);
  expect(board.getEnd1()).toBe(2);
  expect(board.getEnd2()).toBe(3);
});
