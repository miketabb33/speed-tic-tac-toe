import Board from '../../game/board.js'

let subject

beforeEach(() => {
	subject = new Board
})

test('addMove', () => {	
	expect(subject.moves).toStrictEqual([null, null, null, null, null, null, null, null, null])
	const moveToAdd = 'X'

	subject.addMove(moveToAdd, 2)

	expect(subject.moves).toStrictEqual([null, null, moveToAdd, null, null, null, null, null, null])
})

test('moveAvailable-isAvailable', () => {
	subject.moves = ['X', null, 'O', null, 'X', null]

	const i = 1
	const result = subject.isMoveAvailable(i)

	expect(result).toBe(true)
})

test('moveAvailable-notAvailable', () => {
	subject.moves = ['X', null, 'O', null, 'X', null]

	const i = 2
	const result = subject.isMoveAvailable(i)

	expect(result).toBe(false)
})

test('anyAvailableMoves false', () => {
	subject.moves = ['X', 'O', 'O', 'O', 'X', 'O', 'X', 'O', 'X']

	const result = subject.anyAvailableMoves()

	expect(result).toBe(false)
})

test('anyAvailableMoves 1 left', () => {
	subject.moves = ['X', 'O', 'O', 'O', 'X', null, 'X', 'O', 'X']

	const result = subject.anyAvailableMoves()

	expect(result).toBe(true)
})