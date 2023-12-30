import Board from "./Board";
import Stock from "./Stock";
import Tile from "./Tile";

export default class Player {
  name: String;
  hand: Tile[];
  constructor (name: String) {
    this.name = name;
    this.hand = [];
  }
  drawInitialTiles (stock: Stock) {
    if (stock.size() >= 7){
      for (let i = 1; i < 7; i++) {
        this.hand.push(stock.draw());
      }
    } else {
      throw Error('No enough tiles available to draw the initial tiles')
    }
  }
  play (board: Board, stock: Stock) {
    let playableTile = this.hand.find(handTile => board.playableEnd1(handTile) || board.playableEnd2(handTile))
    while (!playableTile && stock.size() > 0) {
      const newTile = stock.draw();
      this.hand.push(newTile);
      if (board.playableEnd1(newTile) || board.playableEnd2(newTile)) {
        playableTile = newTile;
      }
    }
    if (playableTile) {
      const index = this.hand.indexOf(playableTile);
      this.hand.splice(index, 1);
      if (board.playableEnd1(playableTile)) {
        console.log(`${this.name} plays ${playableTile} to connect to tile ${board.getEnd1Tile()} on the board`)
        board.playEnd1(playableTile);
      } else {
        console.log(`${this.name} plays ${playableTile} to connect to tile ${board.getEnd2Tile()} on the board`)
        board.playEnd2(playableTile);
      }
    } else {
      console.log(`No more tiles to draw. Player ${this.name} blocked`);
    }
  }
}
