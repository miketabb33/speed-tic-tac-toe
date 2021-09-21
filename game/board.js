import Square from "./square"

export default class Board {
	squares
	index

	constructor(index) {
		this.index = index
		this.squares = this.getBlankSquares()
	}

  addMarker(marker, index) {
		const newSquares = this.squares.slice()
    newSquares[index].marker = marker
    this.squares = newSquares
	}

	isSquareAvailable(index) {
		return this.squares[index].marker == null ? true : false
	}

	anyAvailableSquares() {
		const availableMoves = this.squares.filter(square => square.marker == null)
		return availableMoves.length != 0 
	}

	getBlankSquares() {
		let squares = []
		for (let i = 0; i < 9; i++){
			const square = new Square(null, [i, this.index])
			squares.push(square)
		}
		return squares
	}
}