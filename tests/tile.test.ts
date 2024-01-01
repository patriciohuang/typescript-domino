import Tile from "../types/Tile";

test('Flip tile', () => {
  const tile = new Tile(0,6);
  expect(tile.end1).toBe(0);
  expect(tile.end2).toBe(6);
  tile.flip()
  expect(tile.end1).toBe(6);
  expect(tile.end2).toBe(0);
});
test('Tile to string', () => {
  const tile = new Tile(0,6);
  expect(tile.toString()).toBe('<0, 6>');
});
