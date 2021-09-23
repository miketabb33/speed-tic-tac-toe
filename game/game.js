import Board3D from './board3D.js'
import GameState from './game-state.js'
import Winner3D from './winner3D.js'
import Player from '../game/player.js'
import Board from '../game/board'
import Timer from './timer.js'

export default class Game {
  #boards
  #player
  #winner3D
  #xTimer
  #oTimer
  #isGameOver = false
  playerMarkers = ['X', 'O']
  didRecieveWinningCombination

	constructor(timerValueDidChange, timerDidHit0) {
    const board1 = new Board(0)
    const board2 = new Board(1)
    const board3 = new Board(2)
    
		this.#boards = new Board3D(board1, board2, board3)
		this.#player = new Player(this.playerMarkers)
		this.#winner3D = new Winner3D
    this.#xTimer = new Timer((time) => timerValueDidChange(this.playerMarkers[0], time), () => timerDidHit0(this.playerMarkers[1]))
    this.#oTimer = new Timer((time) => timerValueDidChange(this.playerMarkers[1], time), () => timerDidHit0(this.playerMarkers[0]))
  }

	getSquaresForBoard(boardIndex) {
    return this.#boards.getSquares(boardIndex)
  }
  
	attemptToAddMove(squareIndex, boardIndex) {
    if (this.#isGameOver) { return GameState.gameOver }
    if (!this.#boards.isSquareAvailable(squareIndex, boardIndex)) { return GameState.moveNotAvailable }
    this.#boards.addMarker(this.#player.current(), squareIndex, boardIndex)
    const winningCombination = this.#winner3D.check(this.#boards.allBoards)
    const status = this.#getPostMoveGameState(winningCombination)
    if (status == GameState.winner) { this.setGameOver() }
    if (status == GameState.draw) { this.setGameOver() }
		if (status == GameState.readyForNextMove) {
      this.#switchTimers(this.#player.current())
      this.#player.next() 
    }
    return [status, this.#player.current()]
  }

  getCurrentPlayer() {
    return this.#player.current()
  }

  setTimers(time) {
    this.#xTimer.totalTimeInHundredthsOfSeconds = time
    this.#oTimer.totalTimeInHundredthsOfSeconds = time
  }

  setGameOver() {
    this.#isGameOver = true
    this.#xTimer.stopTimer()
    this.#oTimer.stopTimer()
  }

  #getPostMoveGameState(winningCombination) {
    if (winningCombination) {
      return GameState.winner
    } else {
      if (this.#boards.anyAvailableSquares()) {
        return GameState.readyForNextMove
      } else {
        return GameState.draw
      }
    }
  }

  #switchTimers(currentPlayer) {
    if (currentPlayer == this.playerMarkers[0]) {
      this.#xTimer.stopTimer()
      this.#oTimer.startTimer()
    } else {
      this.#oTimer.stopTimer()
      this.#xTimer.startTimer()
    }
  }
}