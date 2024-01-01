import Stock from "../types/Stock";

const expectedTiles = [
  [0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6],
  [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6],
  [2, 2], [2, 3], [2, 4], [2, 5], [2, 6],
  [3, 3], [3, 4], [3, 5], [4, 6],
  [4, 5], [4, 5], [4, 6],
  [5, 5], [5, 6],
  [6, 6]
];

test('Create stock', () => {
  const stock = new Stock();
  expect(stock.size()).toBe(28);
});

test('Check stock tiles', () => {
  const stock = new Stock();
  expectedTiles.forEach(expectedTile => {
    expect(stock.tiles.some(tile => expectedTile[0] === tile.end1 && expectedTile[1] === tile.end2));
  })
});

test('Stock shuffle', () => {
  const stock = new Stock();
  const originalTiles = [...stock.tiles];
  stock.shuffle();
  // check that now both arrays have the same lenght but are not equal (different order)
  expect(stock.tiles).toHaveLength(originalTiles.length);
  expect(stock.tiles).not.toEqual(originalTiles);
  // Sort both arrays and compare again to check they have the same elements
  const sortedOriginal = originalTiles.slice().sort();
  const sortedShuffled = stock.tiles.slice().sort();
  expect(sortedOriginal).toEqual(sortedShuffled);
});

test('Stock draw', () =>{
  const stock = new Stock();
  const tile = stock.draw();
  expect(stock.tiles).toHaveLength(27);
  expect(stock.tiles).not.toContain(tile);
  expect(tile.end1).toBe(6);
  expect(tile.end2).toBe(6);
});
