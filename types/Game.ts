import Board from "./Board";
import Player from "./Player";
import Stock from "./Stock";

export default class Game {
  player1: Player;
  player2: Player;
  currentPlayer: Player | undefined;
  board: Board | undefined;
  stock: Stock;
  constructor(player1Name: String, player2Name: String) {
    this.player1 = new Player(player1Name);
    this.player2 = new Player(player2Name);
    this.stock = new Stock();
  }
  initialize() {
    this.stock.shuffle()
    this.player1.drawInitialTiles(this.stock);
    this.player2.drawInitialTiles(this.stock);
    this.board = new Board(this.stock.draw());
  }
  play() {
    if (this.board) {
      console.log(`Game starting with first tile ${this.board.line[0]}`)
      do {
        this.currentPlayer = this.currentPlayer === this.player2 ? this.player1 : this.player2;
        this.currentPlayer.play(this.board, this.stock);
        console.log(`Board is now: ${this.board}`)
      } while (this.currentPlayer.hand.length > 0 && this.stock.size() > 0)
      if (this.currentPlayer.hand.length === 0) {
        console.log(`Player ${this.currentPlayer.name} has won!`)
      } else {
        console.log("The game is blocked. No player can make a legal move. It's a draw!");
        console.log(`${this.player1.name} hand: ${this.player1.hand.join(', ')}`)
        console.log(`${this.player2.name} hand: ${this.player2.hand.join(', ')}`)
      }
    } else {
      console.log('You must initialize the game first.');
    }
  }
}