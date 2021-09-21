import MockBoard from "../../../mocks/mock-board"
import Winner3D from "../../../game/winner3D"

let subject
let board1 
let board2 
let board3

const mockBoard = new MockBoard
const boardIndex1 = 0
const boardIndex2 = 1
const boardIndex3 = 2

const marker = 'X'

beforeEach(() => {
  subject = new Winner3D()

  board1 = mockBoard.getBlankBoard(boardIndex1)
  board2 = mockBoard.getBlankBoard(boardIndex2)
  board3 = mockBoard.getBlankBoard(boardIndex3)
})

test('winner 3D in order horizontal first', () => {
  board1.squares = mockBoard.getSquares(boardIndex1, [marker, null, null, null, null, null, null, null, null])  
  board2.squares = mockBoard.getSquares(boardIndex2, [null, marker, null, null, null, null, null, null, null])
  board3.squares = mockBoard.getSquares(boardIndex3, [null, null, marker, null, null, null, null, null, null])

  const result = subject.check([board1, board2, board3])

  expect(result).toEqual([[2,2], [1,1], [0,0]])
})

test('winner 3D in order horizontal second', () => {
  board1.squares = mockBoard.getSquares(boardIndex1, [null, null, null, marker, null, null, null, null, null])  
  board2.squares = mockBoard.getSquares(boardIndex2, [null, null, null, null, marker, null, null, null, null])
  board3.squares = mockBoard.getSquares(boardIndex3, [null, null, null, null, null, marker, null, null, null])

  const result = subject.check([board1, board2, board3])

  expect(result).toEqual([[5,2], [4,1], [3,0]])
})

test('winner 3D in order horizontal third', () => {
  board1.squares = mockBoard.getSquares(boardIndex1, [null, null, null, null, null, null, marker, null, null])
  board2.squares = mockBoard.getSquares(boardIndex2, [null, null, null, null, null, null, null, marker, null])
  board3.squares = mockBoard.getSquares(boardIndex3, [null, null, null, null, null, null, null, null, marker])

  const result = subject.check([board1, board2, board3])

  expect(result).toEqual([[8,2], [7,1], [6,0]])
})

test('winner 3D in order vertical first', () => {
  board1.squares = mockBoard.getSquares(boardIndex1, [marker, null, null, null, null, null, null, null, null])  
  board2.squares = mockBoard.getSquares(boardIndex2, [null, null, null, marker, null, null, null, null, null])
  board3.squares = mockBoard.getSquares(boardIndex3, [null, null, null, null, null, null, marker, null, null])

  const result = subject.check([board1, board2, board3])

  expect(result).toEqual([[0,0], [3,1], [6,2]])
})

test('winner 3D in order vertical second', () => {
  board1.squares = mockBoard.getSquares(boardIndex1, [null, marker, null, null, null, null, null, null, null])  
  board2.squares = mockBoard.getSquares(boardIndex2, [null, null, null, null, marker, null, null, null, null])
  board3.squares = mockBoard.getSquares(boardIndex3, [null, null, null, null, null, null, null, marker, null])

  const result = subject.check([board1, board2, board3])

  expect(result).toEqual([[1,0], [4,1], [7,2]])
})

test('winner 3D in order vertical third', () => {
  board1.squares = mockBoard.getSquares(boardIndex1, [null, null, marker, null, null, null, null, null, null])  
  board2.squares = mockBoard.getSquares(boardIndex2, [null, null, null, null, null, marker, null, null, null])
  board3.squares = mockBoard.getSquares(boardIndex3, [null, null, null, null, null, null, null, null, marker])

  const result = subject.check([board1, board2, board3])

  expect(result).toEqual([[2,0], [5,1], [8,2]])
})

test('winner 3D in order diagonal first', () => {
  board1.squares = mockBoard.getSquares(boardIndex1, [marker, null, null, null, null, null, null, null, null])  
  board2.squares = mockBoard.getSquares(boardIndex2, [null, null, null, null, marker, null, null, null, null])
  board3.squares = mockBoard.getSquares(boardIndex3, [null, null, null, null, null, null, null, null, marker])

  const result = subject.check([board1, board2, board3])

  expect(result).toEqual([[0,0], [4,1], [8,2]])
})

test('winner 3D in order diagonal second', () => {
  board1.squares = mockBoard.getSquares(boardIndex1, [null, null, marker, null, null, null, null, null, null])  
  board2.squares = mockBoard.getSquares(boardIndex2, [null, null, null, null, marker, null, null, null, null])
  board3.squares = mockBoard.getSquares(boardIndex3, [null, null, null, null, null, null, marker, null, null])

  const result = subject.check([board1, board2, board3])

  expect(result).toEqual([[2,0], [4,1], [6,2]])
})

test('check for 3D diagonal win 1', () => {
  board1.squares = mockBoard.getSquares(boardIndex1, [marker, null, null, null, null, null, null, null, null])  
  board2.squares = mockBoard.getSquares(boardIndex2, [null, null, null, null, marker, null, null, null, null])
  board3.squares = mockBoard.getSquares(boardIndex3, [null, null, null, null, null, null, null, null, marker])

  const result = subject.checkFor3DDiagonalWin([board1, board2, board3])

  expect(result).toEqual([[0,0], [4,1], [8,2]])
})

test('check for 3D diagonal win 2', () => {
  board1.squares = mockBoard.getSquares(boardIndex1, [null, null, null, null, null, null, null, null, marker])  
  board2.squares = mockBoard.getSquares(boardIndex2, [null, null, null, null, marker, null, null, null, null])
  board3.squares = mockBoard.getSquares(boardIndex3, [marker, null, null, null, null, null, null, null, null])

  const result = subject.checkFor3DDiagonalWin([board1, board2, board3])

  expect(result).toEqual([[8,0], [4,1], [0,2]])
})

test('check for 3D diagonal win 3', () => {
  board1.squares = mockBoard.getSquares(boardIndex1, [null, null, marker, null, null, null, null, null, null])  
  board2.squares = mockBoard.getSquares(boardIndex2, [null, null, null, null, marker, null, null, null, null])
  board3.squares = mockBoard.getSquares(boardIndex3, [null, null, null, null, null, null, marker, null, null])

  const result = subject.checkFor3DDiagonalWin([board1, board2, board3])

  expect(result).toEqual([[2,0], [4,1], [6,2]])
})

test('check for 3D diagonal win 4', () => {
  board1.squares = mockBoard.getSquares(boardIndex1, [null, null, null, null, null, null, marker, null, null])  
  board2.squares = mockBoard.getSquares(boardIndex2, [null, null, null, null, marker, null, null, null, null])
  board3.squares = mockBoard.getSquares(boardIndex3, [null, null, marker, null, null, null, null, null, null])

  const result = subject.checkFor3DDiagonalWin([board1, board2, board3])

  expect(result).toEqual([[6,0], [4,1], [2,2]])
})

xtest('no winner for 3D out of order horizontal', () => {
  board1.moves = [null, null, null, marker, null, null, null, null, null]
  board2.moves = [null, null, null, null, null, marker, null, null, null]
  board3.moves = [null, null, null, null, marker, null, null, null, null]

  const result = subject.check([board1, board2, board3])

  expect(result).toBe(false)
})

xtest('no winner for 3D out of order vertical', () => {
  board1.moves = [null, null, null, null, null, null, marker, null, null]
  board2.moves = [marker, null, null, null, null, null, null, null, null]
  board3.moves = [null, null, null, marker, null, null, null, null, null]

  const result = subject.check([board1, board2, board3])

  expect(result).toBe(false)
})

xtest('no winner for 3D out of order diagonal', () => {
  board1.moves = [null, null, null, null, marker, null, null, null, null]
  board2.moves = [null, null, marker, null, null, null, null, null, null]
  board3.moves = [null, null, null, null, null, null, marker, null, null]

  const result = subject.check([board1, board2, board3])

  expect(result).toBe(false)
})

xtest('no winner for 3D 2 boards horizontal', () => {
  board1.moves = [null, null, null, marker, null, marker, null, null, null]
  board2.moves = [null, null, null, null, null, null, null, null, null]
  board3.moves = [null, null, null, null, marker, null, null, null, null]

  const result = subject.check([board1, board2, board3])

  expect(result).toBe(false)
})

xtest('no winner for 3D 2 boards vertical', () => {
  board1.moves = [null, null, null, null, null, null, marker, null, null]
  board2.moves = [marker, null, null, marker, null, null, null, null, null]
  board3.moves = [null, null, null, null, null, null, null, null, null]

  const result = subject.check([board1, board2, board3])

  expect(result).toBe(false)
})

xtest('no winner for 3D 2 boards diagonal', () => {
  board1.moves = [null, null, null, null, null, null, null, null, null]
  board2.moves = [null, null, marker, null, marker, null, null, null, null]
  board3.moves = [null, null, null, null, null, null, marker, null, null]

  const result = subject.check([board1, board2, board3])

  expect(result).toBe(false)
})

xtest('no winner', () => {
  board1.moves = [marker, null, null, null, null, null, null, null, null]
  board2.moves = [null, null, null, null, null, null, null, null, null]
  board3.moves = [null, null, null, null, null, null, null, null, null]

  const result = subject.check([board1, board2, board3])

  expect(result).toBe(false)
})

test('get side-to-side plane 1', () => {
  board1.squares = mockBoard.getSquares(boardIndex1, [marker, null, null, null, null, null, null, null, null])  
  board2.squares = mockBoard.getSquares(boardIndex2, [marker, null, null, null, null, null, null, null, null])
  board3.squares = mockBoard.getSquares(boardIndex3, [marker, null, null, null, null, null, null, null, null])

  const expectedBoardSquares1 = [marker, marker, marker, null, null, null, null, null, null]
  const expectedBoardSquares2 = [null, null, null, null, null, null, null, null, null]
  const expectedBoardSquares3 = [null, null, null, null, null, null, null, null, null]

  const result = subject.getSideToSidePlanes([board1, board2, board3])

  expect(result[0].squares.map(square => square.marker)).toEqual(expectedBoardSquares1)
  expect(result[1].squares.map(square => square.marker)).toEqual(expectedBoardSquares2)
  expect(result[2].squares.map(square => square.marker)).toEqual(expectedBoardSquares3)
})

test('get side-to-side plane 2', () => {
  board1.squares = mockBoard.getSquares(boardIndex1, [null, null, null, marker, null, null, null, null, null])  
  board2.squares = mockBoard.getSquares(boardIndex2, [null, null, null, null, marker, null, null, null, null])
  board3.squares = mockBoard.getSquares(boardIndex3, [null, null, null, null, null, marker, null, null, null])

  const expectedBoardSquares1 = [null, null, null, null, null, marker, null, null, null]
  const expectedBoardSquares2 = [null, null, null, null, marker, null, null, null, null]
  const expectedBoardSquares3 = [null, null, null, marker, null, null, null, null, null]

  const result = subject.getSideToSidePlanes([board1, board2, board3])

  expect(result[0].squares.map(square => square.marker)).toEqual(expectedBoardSquares1)
  expect(result[1].squares.map(square => square.marker)).toEqual(expectedBoardSquares2)
  expect(result[2].squares.map(square => square.marker)).toEqual(expectedBoardSquares3)
})

test('get side-to-side plane 3', () => {
  board1.squares = mockBoard.getSquares(boardIndex1, [null, null, null, marker, null, null, null, marker, null])  
  board2.squares = mockBoard.getSquares(boardIndex2, [marker, null, null, null, null, marker, null, null, null])
  board3.squares = mockBoard.getSquares(boardIndex3, [null, null, marker, null, null, null, null, marker, null])

  const expectedBoardSquares1 = [null, marker, null, null, null, marker, null, null, null]
  const expectedBoardSquares2 = [null, null, null, null, null, null, marker, null, marker]
  const expectedBoardSquares3 = [marker, null, null, null, marker, null, null, null, null]

  const result = subject.getSideToSidePlanes([board1, board2, board3])

  expect(result[0].squares.map(square => square.marker)).toEqual(expectedBoardSquares1)
  expect(result[1].squares.map(square => square.marker)).toEqual(expectedBoardSquares2)
  expect(result[2].squares.map(square => square.marker)).toEqual(expectedBoardSquares3)
})

test('get top-to-bottom plane 1', () => {
  board1.squares = mockBoard.getSquares(boardIndex1, [marker, null, null, null, null, null, null, null, null])  
  board2.squares = mockBoard.getSquares(boardIndex2, [marker, null, null, null, null, null, null, null, null])
  board3.squares = mockBoard.getSquares(boardIndex3, [marker, null, null, null, null, null, null, null, null])

  const expectedBoardSquares1 = [marker, null, null, marker, null, null, marker, null, null]
  const expectedBoardSquares2 = [null, null, null, null, null, null, null, null, null]
  const expectedBoardSquares3 = [null, null, null, null, null, null, null, null, null]

  const result = subject.getTopToBottomPlanes([board1, board2, board3])

  expect(result[0].squares.map(square => square.marker)).toEqual(expectedBoardSquares1)
  expect(result[1].squares.map(square => square.marker)).toEqual(expectedBoardSquares2)
  expect(result[2].squares.map(square => square.marker)).toEqual(expectedBoardSquares3)
})

test('get top-to-bottom plane 2', () => {
  board1.squares = mockBoard.getSquares(boardIndex1, [null, null, null, marker, null, null, null, null, null])  
  board2.squares = mockBoard.getSquares(boardIndex2, [null, null, null, null, marker, null, null, null, null])
  board3.squares = mockBoard.getSquares(boardIndex3, [null, null, null, null, null, marker, null, null, null])

  const expectedBoardSquares1 = [null, null, null, null, null, null, null, null, null]
  const expectedBoardSquares2 = [null, null, marker, null, marker, null, marker, null, null]
  const expectedBoardSquares3 = [null, null, null, null, null, null, null, null, null]

  const result = subject.getTopToBottomPlanes([board1, board2, board3])

  expect(result[0].squares.map(square => square.marker)).toEqual(expectedBoardSquares1)
  expect(result[1].squares.map(square => square.marker)).toEqual(expectedBoardSquares2)
  expect(result[2].squares.map(square => square.marker)).toEqual(expectedBoardSquares3)
})

test('get top-to-bottom plane 3', () => {
  board1.squares = mockBoard.getSquares(boardIndex1, [null, null, null, marker, null, null, null, marker, null])  
  board2.squares = mockBoard.getSquares(boardIndex2, [marker, null, null, null, null, marker, null, null, null])
  board3.squares = mockBoard.getSquares(boardIndex3, [null, null, marker, null, null, null, null, marker, null])

  const expectedBoardSquares1 = [null, null, marker, marker, null, null, null, null, null]
  const expectedBoardSquares2 = [null, null, null, null, null, marker, marker, null, null]
  const expectedBoardSquares3 = [null, marker, null, null, null, null, null, marker, null]

  const result = subject.getTopToBottomPlanes([board1, board2, board3])

  expect(result[0].squares.map(square => square.marker)).toEqual(expectedBoardSquares1)
  expect(result[1].squares.map(square => square.marker)).toEqual(expectedBoardSquares2)
  expect(result[2].squares.map(square => square.marker)).toEqual(expectedBoardSquares3)
})