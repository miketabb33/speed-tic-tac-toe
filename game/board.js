export default class Board {
	moves = Array(9).fill(null)

  addMove(marker, index) {
		const newMoves = this.moves.slice()
    newMoves[index] = marker
    this.moves = newMoves
	}

	isMoveAvailable(index) {
		return this.moves[index] == null ? true : false
	}

	anyAvailableMoves() {
		const availableMoves = this.moves.filter(move => move == null)
		return availableMoves.length != 0 
	}
}