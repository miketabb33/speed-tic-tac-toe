import React from 'react'
import GameManager from '../../game/game-manager.js'

let subject

beforeEach(() => {
	subject = new GameManager
})

test('addMove', () => {
	expect(subject.moves).toStrictEqual([null, null, null, null, null, null, null, null, null])

	subject.addMove(2)

	expect(subject.moves).toStrictEqual([null, null, "X", null, null, null, null, null, null])
})

test('currentPlayer nextPlayer', () => {
	expect(subject.currentPlayer()).toBe("X")

	subject.nextPlayer()

	expect(subject.currentPlayer()).toBe("O")

	subject.nextPlayer()

	expect(subject.currentPlayer()).toBe("X")
})

test('moveAvailable-isAvailable', () => {
	subject.moves = ['X', null, 'O', null, 'X', null]

	const i = 1
	const result = subject.moveAvailable(i)

	expect(result).toBe(true)
})

test('moveAvailable-notAvailable', () => {
	subject.moves = ['X', null, 'O', null, 'X', null]

	const i = 2
	const result = subject.moveAvailable(i)

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

test('winner X', () => {
	subject.moves = ["X", "X", "X", null, null, null, null, null, null,]

	let result = subject.winner()

	expect(result).toBe("X")
	expect(subject.isGameOver).toBe(true)
})

test('winner O', () => {
	subject.moves = ["O", "X", "X", "O", null, null, "O", null, null,]

	let result = subject.winner()

	expect(result).toBe("O")
	expect(subject.isGameOver).toBe(true)
})

test('winner undefined', () => {
	subject.moves = ["O", "X", "X", "O", null, null, "X", null, null,]

	let result = subject.winner()

	expect(result).toBe(undefined)
	expect(subject.isGameOver).toBe(false)
})