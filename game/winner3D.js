import Board from "./board"
import Winner from "./winner"

export default class Winner3D {
  winner = new Winner

  diagonalWinVariations = [
    [[0,0],[4,1],[8,2]],
    [[2,0],[4,1],[6,2]],
    [[6,0],[4,1],[2,2]],
    [[8,0],[4,1],[0,2]]
  ]

  check(boards) {
    const initialPlaneWinningCombination = this.checkPlansForWinner(boards)
    if (initialPlaneWinningCombination) { return initialPlaneWinningCombination }

    const sideBySidePlanes = this.getSideToSidePlanes(boards)
    const sideBySideWinningCombination = this.checkPlansForWinner(sideBySidePlanes)
    if (sideBySideWinningCombination) { return sideBySideWinningCombination }

    const topToBottomPlanes = this.getTopToBottomPlanes(boards)
    const topToBottomWinningCombination = this.checkPlansForWinner(topToBottomPlanes)
    if (topToBottomWinningCombination) { return topToBottomWinningCombination } 

    const diagonalWinCombination = this.checkFor3DDiagonalWin(boards)
    if (diagonalWinCombination) { return diagonalWinCombination }
    return false
  }

  checkPlansForWinner(boards) {
    for (let j=0; j<boards.length; j++) {
      const board = boards[j]
      const winningCombination = this.winner.check(board)
      if (winningCombination) {
        return winningCombination
      }
    }
  }

  checkFor3DDiagonalWin(boards) {
    for (let i=0; i<this.diagonalWinVariations.length;i++) {
      const winVariation = this.diagonalWinVariations[i]
      let cache = []
      for (let j=0; j<winVariation.length;j++) {
        const indexPath = winVariation[j]
        cache.push(boards[indexPath[1]].squares[indexPath[0]])
      }
      if (cache[0].marker && cache[0].marker == cache[1].marker && cache[0].marker == cache[2].marker) {
        boards[cache[0].indexPath[1]].squares[cache[0].indexPath[0]].winningMarker = true
        boards[cache[1].indexPath[1]].squares[cache[1].indexPath[0]].winningMarker = true
        boards[cache[2].indexPath[1]].squares[cache[2].indexPath[0]].winningMarker = true
        return winVariation
      }
    }
  }

  getSideToSidePlanes(boards) {
    const board1Squares = boards[0].squares
    const board2Squares = boards[1].squares
    const board3Squares = boards[2].squares

    let sidePlane1 = new Board
    let sidePlane2 = new Board
    let sidePlane3 = new Board

    sidePlane1.squares[2] = board1Squares[0]
    sidePlane1.squares[1] = board2Squares[0]
    sidePlane1.squares[0] = board3Squares[0]

    sidePlane1.squares[5] = board1Squares[3]
    sidePlane1.squares[4] = board2Squares[3]
    sidePlane1.squares[3] = board3Squares[3]

    sidePlane1.squares[8] = board1Squares[6]
    sidePlane1.squares[7] = board2Squares[6]
    sidePlane1.squares[6] = board3Squares[6]

    sidePlane2.squares[2] = board1Squares[1]
    sidePlane2.squares[1] = board2Squares[1]
    sidePlane2.squares[0] = board3Squares[1]

    sidePlane2.squares[5] = board1Squares[4]
    sidePlane2.squares[4] = board2Squares[4]
    sidePlane2.squares[3] = board3Squares[4]

    sidePlane2.squares[8] = board1Squares[7]
    sidePlane2.squares[7] = board2Squares[7]
    sidePlane2.squares[6] = board3Squares[7]

    sidePlane3.squares[2] = board1Squares[2]
    sidePlane3.squares[1] = board2Squares[2]
    sidePlane3.squares[0] = board3Squares[2]

    sidePlane3.squares[5] = board1Squares[5]
    sidePlane3.squares[4] = board2Squares[5]
    sidePlane3.squares[3] = board3Squares[5]

    sidePlane3.squares[8] = board1Squares[8]
    sidePlane3.squares[7] = board2Squares[8]
    sidePlane3.squares[6] = board3Squares[8]

    return [sidePlane1, sidePlane2, sidePlane3]
  }

  getTopToBottomPlanes(boards) {
    const board1Squares = boards[0].squares
    const board2Squares = boards[1].squares
    const board3Squares = boards[2].squares

    let topDownPlane1 = new Board
    let topDownPlane2 = new Board
    let topDownPlane3 = new Board
    
    topDownPlane1.squares[6] = board1Squares[0]
    topDownPlane1.squares[3] = board2Squares[0]
    topDownPlane1.squares[0] = board3Squares[0]

    topDownPlane1.squares[7] = board1Squares[1]
    topDownPlane1.squares[4] = board2Squares[1]
    topDownPlane1.squares[1] = board3Squares[1]

    topDownPlane1.squares[8] = board1Squares[2]
    topDownPlane1.squares[5] = board2Squares[2]
    topDownPlane1.squares[2] = board3Squares[2]

    topDownPlane2.squares[6] = board1Squares[3]
    topDownPlane2.squares[3] = board2Squares[3]
    topDownPlane2.squares[0] = board3Squares[3]

    topDownPlane2.squares[7] = board1Squares[4]
    topDownPlane2.squares[4] = board2Squares[4]
    topDownPlane2.squares[1] = board3Squares[4]

    topDownPlane2.squares[8] = board1Squares[5]
    topDownPlane2.squares[5] = board2Squares[5]
    topDownPlane2.squares[2] = board3Squares[5]

    topDownPlane3.squares[6] = board1Squares[6]
    topDownPlane3.squares[3] = board2Squares[6]
    topDownPlane3.squares[0] = board3Squares[6]

    topDownPlane3.squares[7] = board1Squares[7]
    topDownPlane3.squares[4] = board2Squares[7]
    topDownPlane3.squares[1] = board3Squares[7]

    topDownPlane3.squares[8] = board1Squares[8]
    topDownPlane3.squares[5] = board2Squares[8]
    topDownPlane3.squares[2] = board3Squares[8]

    return [topDownPlane1, topDownPlane2, topDownPlane3]
  }
}