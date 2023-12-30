export default class Tile {
  end1: Number;
  end2: Number;
  constructor(end1: Number, end2: Number) {
    this.end1 = end1;
    this.end2 = end2;
  }
  flip() {
    [this.end1, this.end2] = [this.end2, this.end1];
  }
  toString() {
    return `<${this.end1}, ${this.end2}>`
  }
}