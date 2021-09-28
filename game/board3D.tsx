import Board from "./board"

export default class Board3D {
  allBoards

  constructor(board1: Board, board2: Board, board3: Board) {
    this.allBoards = [board1, board2, board3]
  }

  getSquares(boardIndex: number) {
    return this.allBoards[boardIndex].squares
  }

  addMarker(marker: string, squareIndex: number, boardIndex: number) {
    this.allBoards[boardIndex].addMarker(marker, squareIndex)
  }

  isSquareAvailable(squareIndex: number, boardIndex: number): boolean {
    return this.allBoards[boardIndex].isSquareAvailable(squareIndex)
  }

  anyAvailableSquares(): boolean {
    for (var i = 0; i < this.allBoards.length; i++) {
      const board = this.allBoards[i]
      if (board.anyAvailableSquares()) {
        return true
      }
    }
    return false
  }
}