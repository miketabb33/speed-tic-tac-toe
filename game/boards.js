export default class Boards {
  allBoards

  constructor(board1, board2, board3) {
    this.allBoards = [board1, board2, board3]
  }

  getMoves(boardIndex) {
    return this.allBoards[boardIndex].moves
  }

  addMove(marker, squareIndex, boardIndex) {
    this.allBoards[boardIndex].addMove(marker, squareIndex)
  }

  isMoveAvailable(squareIndex, boardIndex) {
    return this.allBoards[boardIndex].isMoveAvailable(squareIndex)
  }

  anyAvailableMoves() {
    for (var i = 0; i < this.allBoards.length; i++) {
      const board = this.allBoards[i]
      if (board.anyAvailableMoves()) {
        return true
      }
    }
    return false
  }
}