import Board3D from "../../../game/board3D"
import MockBoard from "../../../mocks/mock-board"

let subject
const mockBoard = new MockBoard

let board1 
let board2 
let board3

beforeEach(() => {
  board1 = mockBoard.getBlankBoard(0)
  board2 = mockBoard.getBlankBoard(1)
  board3 = mockBoard.getBlankBoard(2)
	subject = new Board3D(board1, board2, board3)
})

test('add marker first', () => {
  const marker = "X"
  const boardIndex = 2
  const squareIndex = 0

  subject.addMarker(marker, squareIndex, boardIndex)

  expect(subject.allBoards[boardIndex].squares[squareIndex].marker).toEqual(marker)
})

test('add marker second', () => {
  const marker = "X"
  const boardIndex = 1
  const squareIndex = 5

  subject.addMarker(marker, squareIndex, boardIndex)

  expect(subject.allBoards[boardIndex].squares[squareIndex].marker).toEqual(marker)
})

test('add marker third', () => {
  const marker = "O"
  const boardIndex = 0
  const squareIndex = 8

  subject.addMarker(marker, squareIndex, boardIndex)

  expect(subject.allBoards[boardIndex].squares[squareIndex].marker).toEqual(marker)
})

test('get squares', () => {
  board1.squares = mockBoard.getSquares(0, ['X', null, null, null, null, null, null, null, null]) 
  board2.squares = mockBoard.getSquares(1, [null, 'X', null, null, null, null, null, null, null])
  board3.squares = mockBoard.getSquares(2, [null, null, "X", null, null, null, null, null, null]) 

  const result1 = subject.getSquares(0)
  expect(result1).toEqual(board1.squares)

  const result2 = subject.getSquares(1)
  expect(result2).toEqual(board2.squares)

  const result3 = subject.getSquares(2)
  expect(result3).toEqual(board3.squares)
})

test('isMoveAvailable yes', () => {
  board2.squares = mockBoard.getSquares(1, [null, null, null, null, null, null, null, null, null])
  
  const result = subject.isSquareAvailable(1, 1)

  expect(result).toBe(true)
})

test('isMoveAvailable no', () => {
  board2.squares = mockBoard.getSquares(1, [null, null, null, 'X', null, null, null, null, null])

  const result = subject.isSquareAvailable(3, 1)

  expect(result).toBe(false)
})

test('anyAvailableMoves yes', () => {
  board1.squares = mockBoard.getSquares(0, ['X', 'O', 'X', 'X', 'X', 'O', 'O', 'X', 'O']) 
  board2.squares = mockBoard.getSquares(1, [null, 'X', null, null, null, null, null, null, null])
  board3.squares = mockBoard.getSquares(2, ['X', 'O', 'X', 'X', 'X', 'O', 'O', 'X', 'O']) 

  const result = subject.anyAvailableSquares()

  expect(result).toBe(true)
})

test('anyAvailableMoves no', () => {
  board1.squares = mockBoard.getSquares(0, ['X', 'O', 'X', 'X', 'X', 'O', 'O', 'X', 'O']) 
  board2.squares = mockBoard.getSquares(1, ['X', 'O', 'X', 'X', 'X', 'O', 'O', 'X', 'O'])
  board3.squares = mockBoard.getSquares(2, ['X', 'O', 'X', 'X', 'X', 'O', 'O', 'X', 'O']) 

  const result = subject.anyAvailableSquares()

  expect(result).toBe(false)
})