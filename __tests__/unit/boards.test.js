import Board from "../../game/board"
import Boards from "../../game/boards"

let subject

let board1 
let board2 
let board3

beforeEach(() => {
  board1 = new Board
  board2 = new Board
  board3 = new Board

	subject = new Boards(board1, board2, board3)
})

test('addMove first', () => {
  const marker = "X"
  const boardIndex = 2
  const squareIndex = 0

  subject.addMove(marker, squareIndex, boardIndex)

  expect(subject.allBoards[boardIndex].moves[squareIndex]).toBe(marker)
})

test('addMove second', () => {
  const marker = "X"
  const boardIndex = 1
  const squareIndex = 5

  subject.addMove(marker, squareIndex, boardIndex)

  expect(subject.allBoards[boardIndex].moves[squareIndex]).toBe(marker)
})

test('addMove third', () => {
  const marker = "O"
  const boardIndex = 0
  const squareIndex = 8

  subject.addMove(marker, squareIndex, boardIndex)

  expect(subject.allBoards[boardIndex].moves[squareIndex]).toBe(marker)
})

test('getMove', () => {
  board1.moves = ['X', null, null, null, null, null, null, null, null]
  board2.moves = [null, 'X', null, null, null, null, null, null, null]
  board3.moves = [null, null, "X", null, null, null, null, null, null]

  const result1 = subject.getMoves(0)
  expect(result1).toStrictEqual(board1.moves)

  const result2 = subject.getMoves(1)
  expect(result2).toStrictEqual(board2.moves)

  const result3 = subject.getMoves(2)
  expect(result3).toStrictEqual(board3.moves)
})

test('isMoveAvailable yes', () => {
  board2.moves = [null, null, null, null, null, null, null, null, null]

  const result = subject.isMoveAvailable(3, 1)

  expect(result).toBe(true)
})

test('isMoveAvailable no', () => {
  board2.moves = [null, null, null, "X", null, null, null, null, null]

  const result = subject.isMoveAvailable(3, 1)

  expect(result).toBe(false)
})

test('anyAvailableMoves yes', () => {
  board1.moves = ['X', 'O', 'X', 'X', 'X', 'O', 'O', 'X', 'O'] 
  board2.moves = ['X', null, null, null, null, null, null, null, null]
  board3.moves = ['X', 'O', 'X', 'X', 'X', 'O', 'O', 'X', 'O']

  const result = subject.anyAvailableMoves()

  expect(result).toBe(true)
})

test('anyAvailableMoves no', () => {
  board1.moves = ['X', 'O', 'X', 'X', 'X', 'O', 'O', 'X', 'O']
  board2.moves = ['X', 'O', 'X', 'X', 'X', 'O', 'O', 'X', 'O']
  board3.moves = ['X', 'O', 'X', 'X', 'X', 'O', 'O', 'X', 'O']

  const result = subject.anyAvailableMoves()

  expect(result).toBe(false)
})