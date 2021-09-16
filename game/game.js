import Boards from './boards.js'
import GameState from './game-state.js'
import Winner from './winner.js'
import Player from '../game/player.js'
import Board from '../game/board'
import Timer from './timer.js'

export default class Game {
  #boards
  #player
  #winner
  #xTimer
  #oTimer
  #isGameOver = false

	constructor(didChangeXtime, didChangeOtime) {
		const playerMarkers = ['X', 'O']
    const board1 = new Board
    const board2 = new Board
    const board3 = new Board
    
		this.#boards = new Boards(board1, board2, board3)
		this.#player = new Player(playerMarkers)
		this.#winner = new Winner
    this.#xTimer = new Timer((time) => didChangeXtime(time))
    this.#oTimer = new Timer((time) => didChangeOtime(time))
    setTimeout(() => {
      this.#oTimer.startTimer()
    }, 3000);
    setTimeout(() => {
      this.#xTimer.startTimer()
    }, 1000);  
  }

	getMovesForBoard(boardIndex) {
    return this.#boards.getMoves(boardIndex)
  }
  
	attemptToAddMove(squareIndex, boardIndex) {
    if (this.#isGameOver) { return GameState.gameOver }
    if (!this.#boards.isMoveAvailable(squareIndex, boardIndex)) { return GameState.moveNotAvailable }
    this.#boards.addMove(this.#player.current(), squareIndex, boardIndex)
    const status = this.#getPostMoveGameState()
    if (status == GameState.winner) { this.setGameOver() }
    if (status == GameState.draw) { this.setGameOver() }
		if (status == GameState.readyForNextMove) { this.#player.next() }
    return [status, this.#player.current()]
  }

  getCurrentPlayer() {
    return this.#player.current()
  }

  setGameOver() {
    this.#isGameOver = true
    this.#xTimer.stopTimer()
    this.#oTimer.stopTimer()
  }

  #getPostMoveGameState() {
    if (this.#checkForWinner(this.#boards.allBoards)) {
      return GameState.winner
    } else {
      if (this.#boards.anyAvailableMoves()) {
        return GameState.readyForNextMove
      } else {
        return GameState.draw
      }
    }
  }

  #checkForWinner(boards) {
		if (this.#winner.isolatedBoardWinner(boards)) { return true }
		if (this.#winner.samePosition3DWinner(boards)) { return true }
    if (this.#winner.winner3D(boards)) { return true }
    return false
	}
}