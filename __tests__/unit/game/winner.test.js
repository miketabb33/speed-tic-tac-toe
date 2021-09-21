import MockBoard from "../../../mocks/mock-board"
import Winner from "../../../game/winner"

let subject
let board

const mockBoard = new MockBoard
const marker = 'X'
const whateverBoardIndex = 1

beforeEach(() => {
  subject = new Winner
  board = mockBoard.getBlankBoard(whateverBoardIndex)
})

test('winner horizontal 1', () => {
  board.squares = mockBoard.getSquares(whateverBoardIndex, [marker, marker, marker, null, null, null, null, null, null])

  const result = subject.check(board)

  expect(result).toEqual([[0, whateverBoardIndex], [1, whateverBoardIndex], [2, whateverBoardIndex]])

  expect(board.squares[0].winningMarker).toBe(true)
  expect(board.squares[1].winningMarker).toBe(true)
  expect(board.squares[2].winningMarker).toBe(true)
})

test('winner horizontal 2', () => {
  board.squares = mockBoard.getSquares(whateverBoardIndex, [null, null, null, marker, marker, marker, null, null, null])

  const result = subject.check(board)

  expect(result).toEqual([[3, whateverBoardIndex], [4, whateverBoardIndex], [5, whateverBoardIndex]])

  expect(board.squares[3].winningMarker).toBe(true)
  expect(board.squares[4].winningMarker).toBe(true)
  expect(board.squares[5].winningMarker).toBe(true)
})

test('winner horizontal 3', () => {
  board.squares = mockBoard.getSquares(whateverBoardIndex, [null, null, null, null, null, null, marker, marker, marker])

  const result = subject.check(board)

  expect(result).toEqual([[6, whateverBoardIndex], [7, whateverBoardIndex], [8, whateverBoardIndex]])
  
  expect(board.squares[6].winningMarker).toBe(true)
  expect(board.squares[7].winningMarker).toBe(true)
  expect(board.squares[8].winningMarker).toBe(true)
})

test('winner vertical 1', () => {
  board.squares = mockBoard.getSquares(whateverBoardIndex, [marker, null, null, marker, null, null, marker, null, null])

  const result = subject.check(board)

  expect(result).toEqual([[0, whateverBoardIndex], [3, whateverBoardIndex], [6, whateverBoardIndex]])

  expect(board.squares[0].winningMarker).toBe(true)
  expect(board.squares[3].winningMarker).toBe(true)
  expect(board.squares[6].winningMarker).toBe(true)
})

test('winner vertical 2', () => {
  board.squares = mockBoard.getSquares(whateverBoardIndex, [null, marker, null, null, marker, null, null, marker, null])

  const result = subject.check(board)

  expect(result).toEqual([[1, whateverBoardIndex], [4, whateverBoardIndex], [7, whateverBoardIndex]])

  expect(board.squares[1].winningMarker).toBe(true)
  expect(board.squares[4].winningMarker).toBe(true)
  expect(board.squares[7].winningMarker).toBe(true)
})

test('winner vertical 3', () => {
  board.squares = mockBoard.getSquares(whateverBoardIndex, [null, null, marker, null, null, marker, null, null, marker])

  const result = subject.check(board)

  expect(result).toEqual([[2, whateverBoardIndex], [5, whateverBoardIndex], [8, whateverBoardIndex]])

  expect(board.squares[2].winningMarker).toBe(true)
  expect(board.squares[5].winningMarker).toBe(true)
  expect(board.squares[8].winningMarker).toBe(true)
})

test('winner diagonal 1', () => {
  board.squares = mockBoard.getSquares(whateverBoardIndex, [marker, null, null, null, marker, null, null, null, marker])

  const result = subject.check(board)

  expect(result).toEqual([[0, whateverBoardIndex], [4, whateverBoardIndex], [8, whateverBoardIndex]])

  expect(board.squares[0].winningMarker).toBe(true)
  expect(board.squares[4].winningMarker).toBe(true)
  expect(board.squares[8].winningMarker).toBe(true)
})

test('winner diagonal 2', () => {
  board.squares = mockBoard.getSquares(whateverBoardIndex, [null, null, marker, null, marker, null, marker, null, null])

  const result = subject.check(board)

  expect(result).toEqual([[2, whateverBoardIndex], [4, whateverBoardIndex], [6, whateverBoardIndex]])

  expect(board.squares[2].winningMarker).toBe(true)
  expect(board.squares[4].winningMarker).toBe(true)
  expect(board.squares[6].winningMarker).toBe(true)
})

test('not winner', () => {
  board.squares = mockBoard.getSquares(whateverBoardIndex, [null, null, null, null, marker, null, marker, null, null])

  const result = subject.check(board)

  expect(result).toBe(undefined) 
})