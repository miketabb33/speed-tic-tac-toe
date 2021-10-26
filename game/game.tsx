import Board3D from './board3D'
import Board from './board'
import GameState from './game-state'
import Winner3D from './winner3D'
import Player from './player'
import PlayerTimer from './timer'

export default class Game {
  #board3D
  #player
  #winner3D
  #xTimer
  #oTimer
  #isGameOver = false
  playerMarkers = ['x', 'o']

	constructor(timerValueDidChange: (marker: string, time: number) => void, timerDidHit0: (marker: string) => void) {   
    const board1 = new Board(0)
    const board2 = new Board(1)
    const board3 = new Board(2)

		this.#board3D = new Board3D(board1, board2, board3)
		this.#player = new Player(this.playerMarkers)
		this.#winner3D = new Winner3D
    this.#xTimer = new PlayerTimer((time: number) => timerValueDidChange(this.playerMarkers[0], time), () => timerDidHit0(this.playerMarkers[1]))
    this.#oTimer = new PlayerTimer((time: number) => timerValueDidChange(this.playerMarkers[1], time), () => timerDidHit0(this.playerMarkers[0]))
  }

	getSquaresForBoard(boardIndex: number) {
    return this.#board3D.getSquares(boardIndex)
  }
  
	attemptToAddMove(squareIndex: number, boardIndex: number) {
    if (this.#isGameOver) { return GameState.gameOver }
    if (!this.#board3D.isSquareAvailable(squareIndex, boardIndex)) { return GameState.moveNotAvailable }
    this.#board3D.addMarker(this.#player.current(), squareIndex, boardIndex)
    const winningCombination = this.#winner3D.check(this.#board3D.allBoards)
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

  setTimers(time: number) {
    this.#xTimer.setTotalTime(time)
    this.#oTimer.setTotalTime(time)
  }

  setGameOver() {
    this.#isGameOver = true
    this.#xTimer.stopTimer()
    this.#oTimer.stopTimer()
  }

  #getPostMoveGameState(winningCombination: boolean | number[][]): string {
    if (winningCombination) {
      return GameState.winner
    } else {
      if (this.#board3D.anyAvailableSquares()) {
        return GameState.readyForNextMove
      } else {
        return GameState.draw
      }
    }
  }

  #switchTimers(currentPlayer: string) {
    if (currentPlayer == this.playerMarkers[0]) {
      this.#xTimer.stopTimer()
      this.#oTimer.startTimer()
    } else {
      this.#oTimer.stopTimer()
      this.#xTimer.startTimer()
    }
  }
}