export default class GameManager {
	moves = Array(9).fill(null)
	isGameOver = false

	winningMoves = [
		[0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
	]

	addMove(index, marker) {
		const newMoves = this.moves.slice()
    newMoves[index] = marker
    this.moves = newMoves
	}

	moveAvailable(index) {
		return this.moves[index] == null ? true : false
	}

	anyAvailableMoves() {
		const availableMoves = this.moves.filter(move => move == null)
		return availableMoves.length != 0 
	}

	winner() {
		for (let i = 0; i < this.winningMoves.length; i++) {
	    const [a, b, c] = this.winningMoves[i];
	    if (this.moves[a] && this.moves[a] === this.moves[b] && this.moves[a] === this.moves[c]) {
	    	this.isGameOver = true
	      return this.moves[a]
	    }
	  }
	}
}