import Board from "../types/Board";
import Tile from "../types/Tile";

test('Get end 1 in the line', () => {
  const board = new Board(new Tile(0, 6));
  expect(board.getEnd1()).toBe(0);
});

test('Get end 2 in the line', () => {
  const board = new Board(new Tile(0, 6));
  expect(board.getEnd2()).toBe(6);
});

test('Get end 1 tile in the line', () => {
  const board = new Board(new Tile(0, 0));
  board.line = [new Tile(0, 0), new Tile(0, 2), new Tile(2, 4)];
  expect(board.getEnd1Tile().end1).toBe(0);
  expect(board.getEnd1Tile().end2).toBe(0);
});

test('Get end 2 tile in the line', () => {
  const board = new Board(new Tile(0, 0));
  board.line = [new Tile(0, 0), new Tile(0, 2), new Tile(2, 4)];
  expect(board.getEnd2Tile().end1).toBe(2);
  expect(board.getEnd2Tile().end2).toBe(4);
});

test('Checke if end 1 is playable', () => {
  const board = new Board(new Tile(0, 1));
  const tile = new Tile(0, 2);
  expect(board.playableEnd1(tile)).toBe(true);
});

test('Checke if end 2 is playable', () => {
  const board = new Board(new Tile(1, 2));
  const tile = new Tile(0, 2);
  expect(board.playableEnd2(tile)).toBe(true);
});

test('Play in the end 1', () => {
  const board = new Board(new Tile(3, 4));
  const tile = new Tile(2, 3);
  board.playEnd1(tile);
  expect(board.getEnd1()).toBe(2);
  expect(board.getEnd2()).toBe(4);
  const otherTile = new Tile(2, 6);
  board.playEnd1(otherTile);
  expect(board.getEnd1()).toBe(6);
  expect(board.getEnd2()).toBe(4);
});

test('Play in the end 2', () => {
  const board = new Board(new Tile(3, 4));
  const tile = new Tile(4, 5);
  board.playEnd2(tile);
  expect(board.getEnd1()).toBe(3);
  expect(board.getEnd2()).toBe(5);
  const otherTile = new Tile(2, 5);
  board.playEnd2(otherTile);
  expect(board.getEnd1()).toBe(3);
  expect(board.getEnd2()).toBe(2);
});

test('Board to string', () => {
  const board = new Board(new Tile(3, 4));
  const tile = new Tile(4, 5);
  board.playEnd2(tile);
  expect(board.toString()).toBe('<3, 4>, <4, 5>');
})
