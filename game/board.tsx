import Square from "./square"

export default class Board {
	squares: Square[]
	index: number

	constructor(index: number) {
		this.index = index
		this.squares = this.getBlankSquares()
	}

  addMarker(marker: string, index: number) {
		const newSquares = this.squares.slice()
    newSquares[index].marker = marker
    this.squares = newSquares
	}

	isSquareAvailable(index: number): boolean {
		return this.squares[index].marker == null ? true : false
	}

	anyAvailableSquares(): boolean {
		const availableMoves = this.squares.filter(square => square.marker == null)
		return availableMoves.length != 0 
	}

	getBlankSquares(): Square[] {
		let squares: Square[] = []
		for (let i = 0; i < 9; i++){
			const square = new Square(null, [i, this.index])
			squares.push(square)
		}
		return squares
	}
}