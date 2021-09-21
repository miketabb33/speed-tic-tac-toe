import Square from "../game/square"
import Board from "../game/board"

export default class MockBoard {
  getBlankBoard(boardIndex) {
    return new Board(boardIndex)
  }

  getSquares(boardIndex, markers) {
    let squares = []
    for (let i=0; i<9; i++) {
      squares.push(new Square(markers[i], [i,boardIndex]))
    }
    return squares
  }

  makeSquare(marker, squareIndex, boardIndex) {
    return new Square(marker, [squareIndex, boardIndex])
  }
}