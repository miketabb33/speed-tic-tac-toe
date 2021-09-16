import Board from "./board"
import Boards from "./boards"

export default class Winner {
//Extact a single board abstraction

  winningVariations = [
		[0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
	]

  diagonalWinVariations = [
    [[0,0],[1,4],[2,8]],
    [[0,2],[1,4],[2,6]],
    [[0,6],[1,4],[2,2]],
    [[0,8],[1,4],[2,0]]
  ]

  check(boards) {
    if (this.checkPlansForWinner(boards)) { return true }
    const sideBySidePlanes = this.getSideToSidePlanes(boards)
    if (this.checkPlansForWinner(sideBySidePlanes)) { return true }
    const topToBottomPlanes = this.getTopToBottomPlanes(boards)
    if (this.checkPlansForWinner(topToBottomPlanes)) { return true } 
    if (this.checkFor3DDiagonalWin(boards)) { return true }
    return false
  }

  checkPlansForWinner(boards) {
    for (let i=0; i<this.winningVariations.length; i++) {
      const [a, b, c] = this.winningVariations[i]
      for (let j=0; j<boards.length; j++) {
        const board = boards[j]
        if (board.moves[a] && board.moves[a] === board.moves[b] && board.moves[a] === board.moves[c]) {
          return true
        }
      }
    }
  }

  checkFor3DDiagonalWin(boards) {
    for (let i=0; i<this.diagonalWinVariations.length;i++) {
      const winVariation = this.diagonalWinVariations[i]
      let cache = []
      for (let j=0; j<winVariation.length;j++) {
        const indexPath = winVariation[j]
        cache.push(boards[indexPath[0]].moves[indexPath[1]])
      }
      if (cache[0] && cache[0] == cache[1] && cache[0] == cache[2]) {
        return true
      }
    }
  }

  getSideToSidePlanes(boards) {
    let sidePlane1 = new Board
    let sidePlane2 = new Board
    let sidePlane3 = new Board

    const board1 = boards[0]
    const board2 = boards[1]
    const board3 = boards[2] 

    sidePlane1.moves[2] = board1.moves[0]
    sidePlane1.moves[1] = board2.moves[0]
    sidePlane1.moves[0] = board3.moves[0]

    sidePlane1.moves[5] = board1.moves[3]
    sidePlane1.moves[4] = board2.moves[3]
    sidePlane1.moves[3] = board3.moves[3]

    sidePlane1.moves[8] = board1.moves[6]
    sidePlane1.moves[7] = board2.moves[6]
    sidePlane1.moves[6] = board3.moves[6]

    sidePlane2.moves[2] = board1.moves[1]
    sidePlane2.moves[1] = board2.moves[1]
    sidePlane2.moves[0] = board3.moves[1]

    sidePlane2.moves[5] = board1.moves[4]
    sidePlane2.moves[4] = board2.moves[4]
    sidePlane2.moves[3] = board3.moves[4]

    sidePlane2.moves[8] = board1.moves[7]
    sidePlane2.moves[7] = board2.moves[7]
    sidePlane2.moves[6] = board3.moves[7]    

    sidePlane3.moves[2] = board1.moves[2]
    sidePlane3.moves[1] = board2.moves[2]
    sidePlane3.moves[0] = board3.moves[2]

    sidePlane3.moves[5] = board1.moves[5]
    sidePlane3.moves[4] = board2.moves[5]
    sidePlane3.moves[3] = board3.moves[5]

    sidePlane3.moves[8] = board1.moves[8]
    sidePlane3.moves[7] = board2.moves[8]
    sidePlane3.moves[6] = board3.moves[8]

    return [sidePlane1, sidePlane2, sidePlane3]
  }

  getTopToBottomPlanes(boards) {
    let topDownPlane1 = new Board
    let topDownPlane2 = new Board
    let topDownPlane3 = new Board

    const board1 = boards[0]
    const board2 = boards[1]
    const board3 = boards[2] 
    
    topDownPlane1.moves[6] = board1.moves[0]
    topDownPlane1.moves[3] = board2.moves[0]
    topDownPlane1.moves[0] = board3.moves[0]

    topDownPlane1.moves[7] = board1.moves[1]
    topDownPlane1.moves[4] = board2.moves[1]
    topDownPlane1.moves[1] = board3.moves[1]
    
    topDownPlane1.moves[8] = board1.moves[2]
    topDownPlane1.moves[5] = board2.moves[2]
    topDownPlane1.moves[2] = board3.moves[2]

    topDownPlane2.moves[6] = board1.moves[3]
    topDownPlane2.moves[3] = board2.moves[3]
    topDownPlane2.moves[0] = board3.moves[3]

    topDownPlane2.moves[7] = board1.moves[4]
    topDownPlane2.moves[4] = board2.moves[4]
    topDownPlane2.moves[1] = board3.moves[4]
    
    topDownPlane2.moves[8] = board1.moves[5]
    topDownPlane2.moves[5] = board2.moves[5]
    topDownPlane2.moves[2] = board3.moves[5]

    topDownPlane3.moves[6] = board1.moves[6]
    topDownPlane3.moves[3] = board2.moves[6]
    topDownPlane3.moves[0] = board3.moves[6]

    topDownPlane3.moves[7] = board1.moves[7]
    topDownPlane3.moves[4] = board2.moves[7]
    topDownPlane3.moves[1] = board3.moves[7]
    
    topDownPlane3.moves[8] = board1.moves[8]
    topDownPlane3.moves[5] = board2.moves[8]
    topDownPlane3.moves[2] = board3.moves[8]

    return [topDownPlane1, topDownPlane2, topDownPlane3]
  }
}