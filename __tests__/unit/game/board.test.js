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
	expect(subject.squares[0].indexPath).toEqual([0, whateverIndex])
	expect(subject.squares[1].marker).toEqual(null)
	expect(subject.squares[1].indexPath).toEqual([1, whateverIndex])
	expect(subject.squares[2].marker).toEqual("X")
	expect(subject.squares[2].indexPath).toEqual([2, whateverIndex])
	expect(subject.squares[3].marker).toEqual(null)
	expect(subject.squares[3].indexPath).toEqual([3, whateverIndex])
	expect(subject.squares[4].marker).toEqual(null)
	expect(subject.squares[4].indexPath).toEqual([4, whateverIndex])
	expect(subject.squares[5].marker).toEqual(null)
	expect(subject.squares[5].indexPath).toEqual([5, whateverIndex])
	expect(subject.squares[6].marker).toEqual(null)
	expect(subject.squares[6].indexPath).toEqual([6, whateverIndex])
	expect(subject.squares[7].marker).toEqual(null)
	expect(subject.squares[7].indexPath).toEqual([7, whateverIndex])
	expect(subject.squares[8].marker).toEqual(null)
	expect(subject.squares[8].indexPath).toEqual([8, whateverIndex])
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
	expect(result[0].indexPath).toEqual([0, boardIndex])
	expect(result[1].marker).toEqual(null)
	expect(result[1].indexPath).toEqual([1, boardIndex])
	expect(result[2].marker).toEqual(null)
	expect(result[2].indexPath).toEqual([2, boardIndex])
	expect(result[3].marker).toEqual(null)
	expect(result[3].indexPath).toEqual([3, boardIndex])
	expect(result[4].marker).toEqual(null)
	expect(result[4].indexPath).toEqual([4, boardIndex])
	expect(result[5].marker).toEqual(null)
	expect(result[5].indexPath).toEqual([5, boardIndex])
	expect(result[6].marker).toEqual(null)
	expect(result[6].indexPath).toEqual([6, boardIndex])
	expect(result[7].marker).toEqual(null)
	expect(result[7].indexPath).toEqual([7, boardIndex])
	expect(result[8].marker).toEqual(null)
	expect(result[8].indexPath).toEqual([8, boardIndex])
})