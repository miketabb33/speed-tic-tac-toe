import Square from '../../../game/square.js'
import Board from '../../../game/board.js'

let subject
let whateverIndex = 3

beforeEach(() => {
	subject = new Board(whateverIndex)
})

test('addMarker', () => {	
	const markerToAdd = 'X'

	subject.addMarker(markerToAdd, 2)

	expect(subject.squares.length).toEqual(9)

	expect(subject.squares[0].marker).toEqual(null)
	expect(subject.squares[0].indexPath).toEqual([whateverIndex, 0])
	expect(subject.squares[1].marker).toEqual(null)
	expect(subject.squares[1].indexPath).toEqual([whateverIndex, 1])
	expect(subject.squares[2].marker).toEqual("X")
	expect(subject.squares[2].indexPath).toEqual([whateverIndex, 2])
	expect(subject.squares[3].marker).toEqual(null)
	expect(subject.squares[3].indexPath).toEqual([whateverIndex, 3])
	expect(subject.squares[4].marker).toEqual(null)
	expect(subject.squares[4].indexPath).toEqual([whateverIndex, 4])
	expect(subject.squares[5].marker).toEqual(null)
	expect(subject.squares[5].indexPath).toEqual([whateverIndex, 5])
	expect(subject.squares[6].marker).toEqual(null)
	expect(subject.squares[6].indexPath).toEqual([whateverIndex, 6])
	expect(subject.squares[7].marker).toEqual(null)
	expect(subject.squares[7].indexPath).toEqual([whateverIndex, 7])
	expect(subject.squares[8].marker).toEqual(null)
	expect(subject.squares[8].indexPath).toEqual([whateverIndex, 8])
})

test('is square available-isAvailable', () => {
	subject.squares = [
		new Square('X', [whateverIndex,0]),
		new Square(null, [whateverIndex,1]),
		new Square('O', [whateverIndex,2]),
		new Square(null, [whateverIndex,3]),
		new Square('X', [whateverIndex,4]),
		new Square(null, [whateverIndex,5])
	]

	const i = 1
	const result = subject.isSquareAvailable(i)

	expect(result).toBe(true)
})

test('is square available-notAvailable', () => {
	subject.squares = [
		new Square('X', [whateverIndex,0]),
		new Square(null, [whateverIndex,1]),
		new Square('O', [whateverIndex,2]),
		new Square(null, [whateverIndex,3]),
		new Square('X', [whateverIndex,4]),
		new Square(null, [whateverIndex,5])
	]

	const i = 2
	const result = subject.isSquareAvailable(i)

	expect(result).toBe(false)
})

test('anyAvailableMoves false', () => {
	subject.squares = [
		new Square('X', [whateverIndex,0]),
		new Square('X', [whateverIndex,1]),
		new Square('O', [whateverIndex,2]),
		new Square('O', [whateverIndex,3]),
		new Square('X', [whateverIndex,4]),
		new Square('X', [whateverIndex,5])
	]

	const result = subject.anyAvailableSquares()

	expect(result).toBe(false)
})

test('anyAvailableMoves 1 left', () => {
	subject.squares = [
		new Square('X', [whateverIndex,0]),
		new Square('X', [whateverIndex,1]),
		new Square('O', [whateverIndex,2]),
		new Square('O', [whateverIndex,3]),
		new Square(null, [whateverIndex,4]),
		new Square('X', [whateverIndex,5])
	]

	const result = subject.anyAvailableSquares()

	expect(result).toBe(true)
})

test('get blank squares', () => {
	const boardIndex = 3
	subject.index = boardIndex

	const result = subject.getBlankSquares()

	expect(result.length).toEqual(9)

	expect(result[0].marker).toEqual(null)
	expect(result[0].indexPath).toEqual([boardIndex, 0])
	expect(result[1].marker).toEqual(null)
	expect(result[1].indexPath).toEqual([boardIndex, 1])
	expect(result[2].marker).toEqual(null)
	expect(result[2].indexPath).toEqual([boardIndex, 2])
	expect(result[3].marker).toEqual(null)
	expect(result[3].indexPath).toEqual([boardIndex, 3])
	expect(result[4].marker).toEqual(null)
	expect(result[4].indexPath).toEqual([boardIndex, 4])
	expect(result[5].marker).toEqual(null)
	expect(result[5].indexPath).toEqual([boardIndex, 5])
	expect(result[6].marker).toEqual(null)
	expect(result[6].indexPath).toEqual([boardIndex, 6])
	expect(result[7].marker).toEqual(null)
	expect(result[7].indexPath).toEqual([boardIndex, 7])
	expect(result[8].marker).toEqual(null)
	expect(result[8].indexPath).toEqual([boardIndex, 8])
})