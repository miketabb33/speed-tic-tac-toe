export default class Boards {
  allBoards

  constructor(board1, board2, board3) {
    this.allBoards = [board1, board2, board3]
  }

  getSquares(boardIndex) {
    return this.allBoards[boardIndex].squares
  }

  addMarker(marker, squareIndex, boardIndex) {
    this.allBoards[boardIndex].addMarker(marker, squareIndex)
  }

  isSquareAvailable(squareIndex, boardIndex) {
    return this.allBoards[boardIndex].isSquareAvailable(squareIndex)
  }

  anyAvailableSquares() {
    for (var i = 0; i < this.allBoards.length; i++) {
      const board = this.allBoards[i]
      if (board.anyAvailableSquares()) {
        return true
      }
    }
    return false
  }
}