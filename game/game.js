import GameState from './game-state.js'
import Winner from './winner.js'

export default class Game {
	isGameOver = false
	#boards

	constructor(board1, board2, board3) {
		this.#boards = [board1, board2, board3]
		this.winner = new Winner
	}

	getMoves(boardIndex) {
		return this.#boards[boardIndex].moves
	}

	attemptToAddMove(marker, squareIndex, boardIndex) {
		if (this.isGameOver) { return GameState.gameOver }
		if (!this.#boards[boardIndex].isMoveAvailable(squareIndex)) { return GameState.moveNotAvailable }
		this.#boards[boardIndex].addMove(marker, squareIndex)
		const status = this.getPostMoveGameState()
		if (status == GameState.winner) { this.isGameOver = true }
		if (status == GameState.draw) { this.isGameOver = true }
		return status
	}

	getPostMoveGameState() {
		if (this.winner.check(this.#boards)) {
			return GameState.winner
		} else {
			if (this.anyAvailableMoves()) {
				return GameState.readyForNextMove
			} else {
				return GameState.draw
			}
		}
	}

	anyAvailableMoves() {
		for (var i = 0; i < this.#boards.length; i++) {
			const board = this.#boards[i]
			if (board.anyAvailableMoves()) {
				return true
			}
		}
		return false
	}
}