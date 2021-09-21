import Boards from './boards.js'
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

	constructor(timerValueDidChange, timerDidHit0, didRecieveWinningCombination) {
    const board1 = new Board
    const board2 = new Board
    const board3 = new Board
    
		this.#boards = new Boards(board1, board2, board3)
		this.#player = new Player(this.playerMarkers)
		this.#winner3D = new Winner3D
    this.#xTimer = new Timer((time) => timerValueDidChange(this.playerMarkers[0], time), () => timerDidHit0(this.playerMarkers[1]))
    this.#oTimer = new Timer((time) => timerValueDidChange(this.playerMarkers[1], time), () => timerDidHit0(this.playerMarkers[0]))
    this.didRecieveWinningCombination = didRecieveWinningCombination
  }

	getMovesForBoard(boardIndex) {
    return this.#boards.getMoves(boardIndex)
  }
  
	attemptToAddMove(squareIndex, boardIndex) {
    if (this.#isGameOver) { return GameState.gameOver }
    if (!this.#boards.isMoveAvailable(squareIndex, boardIndex)) { return GameState.moveNotAvailable }
    this.#boards.addMove(this.#player.current(), squareIndex, boardIndex)
    const winningVariation = this.#winner3D.check(this.#boards.allBoards)
    
    const status = this.#getPostMoveGameState(winningVariation)
    if (status == GameState.winner) { this.handleWinner(winningVariation) }
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
    this.#xTimer.totalTime = time
    this.#oTimer.totalTime = time
  }

  setGameOver() {
    this.#isGameOver = true
    this.#xTimer.stopTimer()
    this.#oTimer.stopTimer()
  }

  handleWinner(winningCombination) {
    this.setGameOver()
    this.didRecieveWinningCombination(winningCombination)
  }

  #getPostMoveGameState(winningCombination) {
    if (winningCombination) {
      return GameState.winner
    } else {
      if (this.#boards.anyAvailableMoves()) {
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