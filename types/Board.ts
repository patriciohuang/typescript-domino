import Tile from "./Tile";

export default class Board {
  line: Tile[];
  constructor(firstTile: Tile) {
    this.line = [firstTile];
  }
  getEnd1(): Number {
    return this.line[0].end1;
  }
  getEnd2(): Number {
    return this.line[this.line.length-1].end2;
  }
  getEnd1Tile(): Tile {
    return this.line[0];
  }
  getEnd2Tile(): Tile {
    return this.line[this.line.length-1];
  }
  playableEnd1(tile: Tile): boolean {
    return tile.end1 === this.getEnd1() || tile.end2 === this.getEnd1();
  };
  playableEnd2(tile: Tile): boolean {
    return tile.end1 === this.getEnd2() || tile.end2 === this.getEnd2();
  };
  playEnd1(tile: Tile) {
    if (tile.end2 === this.getEnd1()) {
      this.line = [tile, ...this.line];
    } else if (tile.end1 === this.getEnd1()) {
      tile.flip();
      this.line = [tile, ...this.line];
    } else {
      throw new Error(`Invalid tile ${tile} to play in end 1 of the line (${this.getEnd1()})`);
    }
  }
  playEnd2(tile: Tile) {
    if (tile.end1 === this.getEnd2()) {
      this.line = [...this.line, tile];
    } else if (tile.end2 === this.getEnd2()) {
      tile.flip();
      this.line = [...this.line, tile];
    } else {
      throw new Error(`Invalid tile ${tile} to play in end 2 of the line (${this.getEnd2()})`);
    }
  }
  toString() {
    return `${this.line.join(', ')}`;
  }
}
