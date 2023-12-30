import Tile from "./Tile";

export default class Stock {
  tiles: Tile[] = [];
  constructor() {
    for(let i = 0; i <= 6; i++) {
      for(let j = 0; j <= i; j++) {
        this.tiles.push(new Tile(i, j));
      }
    }
  }
  shuffle() {
    for (let i = this.tiles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // Swap array[i] and array[j]
      [this.tiles[i], this.tiles[j]] = [this.tiles[j], this.tiles[i]];
    }
  }
  size() {
    return this.tiles.length
  }
  draw(): Tile {
    const tile = this.tiles.pop();
    if (tile) {
      return tile
    } else {
      throw new Error(`There are no more tiles to draw.`)
    }
  }
}