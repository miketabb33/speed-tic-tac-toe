import Square from "../../../game/square"
import Board from "../../../game/board"
import Winner3D from "../../../game/winner3D"

let subject
let board1 
let board2 
let board3

const marker = 'X'

beforeEach(() => {
  subject = new Winner3D()

  board1 = new Board(0)
  board2 = new Board(1)
  board3 = new Board(2)
})

test('winner 3D in order horizontal first', () => {
  board1.squares = getSquares(0, [marker, null, null, null, null, null, null, null, null])  
  board2.squares = getSquares(1, [null, marker, null, null, null, null, null, null, null])
  board3.squares = getSquares(2, [null, null, marker, null, null, null, null, null, null])

  const result = subject.check([board1, board2, board3])

  expect(result).toBe(true)
})

test('winner 3D in order horizontal second', () => {
  board1.moves = [null, null, null, marker, null, null, null, null, null]
  board2.moves = [null, null, null, null, marker, null, null, null, null]
  board3.moves = [null, null, null, null, null, marker, null, null, null]

  const result = subject.check([board1, board2, board3])

  expect(result).toBe(true)
})

test('winner 3D in order horizontal third', () => {
  board1.moves = [null, null, null, null, null, null, marker, null, null]
  board2.moves = [null, null, null, null, null, null, null, marker, null]
  board3.moves = [null, null, null, null, null, null, null, null, marker]

  const result = subject.check([board1, board2, board3])

  expect(result).toBe(true)
})

test('winner 3D in order vertical first', () => {
  board1.moves = [marker, null, null, null, null, null, null, null, null]
  board2.moves = [null, null, null, marker, null, null, null, null, null]
  board3.moves = [null, null, null, null, null, null, marker, null, null]

  const result = subject.check([board1, board2, board3])

  expect(result).toBe(true)
})

test('winner 3D in order vertical second', () => {
  board1.moves = [null, marker, null, null, null, null, null, null, null]
  board2.moves = [null, null, null, null, marker, null, null, null, null]
  board3.moves = [null, null, null, null, null, null, null, marker, null]

  const result = subject.check([board1, board2, board3])

  expect(result).toBe(true)
})

test('winner 3D in order vertical third', () => {
  board1.moves = [null, null, marker, null, null, null, null, null, null]
  board2.moves = [null, null, null, null, null, marker, null, null, null]
  board3.moves = [null, null, null, null, null, null, null, null, marker]

  const result = subject.check([board1, board2, board3])

  expect(result).toBe(true)
})

test('winner 3D in order diagonal first', () => {
  board1.moves = [marker, null, null, null, null, null, null, null, null]
  board2.moves = [null, null, null, null, marker, null, null, null, null]
  board3.moves = [null, null, null, null, null, null, null, null, marker]

  const result = subject.check([board1, board2, board3])

  expect(result).toBe(true)
})

test('winner 3D in order diagonal second', () => {
  board1.moves = [null, null, marker, null, null, null, null, null, null]
  board2.moves = [null, null, null, null, marker, null, null, null, null]
  board3.moves = [null, null, null, null, null, null, marker, null, null]

  const result = subject.check([board1, board2, board3])

  expect(result).toBe(true)
})

test('check for 3D diagonal win 1', () => {
  board1.moves = [marker, null, null, null, null, null, null, null, null]
  board2.moves = [null, null, null, null, marker, null, null, null, null]
  board3.moves = [null, null, null, null, null, null, null, null, marker]

  const result = subject.checkFor3DDiagonalWin([board1, board2, board3])

  expect(result).toBe(true)
})

test('check for 3D diagonal win 2', () => {
  board1.moves = [null, null, null, null, null, null, null, null, marker]
  board2.moves = [null, null, null, null, marker, null, null, null, null]
  board3.moves = [marker, null, null, null, null, null, null, null, null]

  const result = subject.checkFor3DDiagonalWin([board1, board2, board3])

  expect(result).toBe(true)
})

test('check for 3D diagonal win 3', () => {
  board1.moves = [null, null, marker, null, null, null, null, null, null]
  board2.moves = [null, null, null, null, marker, null, null, null, null]
  board3.moves = [null, null, null, null, null, null, marker, null, null]

  const result = subject.checkFor3DDiagonalWin([board1, board2, board3])

  expect(result).toBe(true)
})

test('check for 3D diagonal win 4', () => {
  board1.moves = [null, null, null, null, null, null, marker, null, null]
  board2.moves = [null, null, null, null, marker, null, null, null, null]
  board3.moves = [null, null, marker, null, null, null, null, null, null]

  const result = subject.checkFor3DDiagonalWin([board1, board2, board3])

  expect(result).toBe(true)
})

test('no winner for 3D out of order horizontal', () => {
  board1.moves = [null, null, null, marker, null, null, null, null, null]
  board2.moves = [null, null, null, null, null, marker, null, null, null]
  board3.moves = [null, null, null, null, marker, null, null, null, null]

  const result = subject.check([board1, board2, board3])

  expect(result).toBe(false)
})

test('no winner for 3D out of order vertical', () => {
  board1.moves = [null, null, null, null, null, null, marker, null, null]
  board2.moves = [marker, null, null, null, null, null, null, null, null]
  board3.moves = [null, null, null, marker, null, null, null, null, null]

  const result = subject.check([board1, board2, board3])

  expect(result).toBe(false)
})

test('no winner for 3D out of order diagonal', () => {
  board1.moves = [null, null, null, null, marker, null, null, null, null]
  board2.moves = [null, null, marker, null, null, null, null, null, null]
  board3.moves = [null, null, null, null, null, null, marker, null, null]

  const result = subject.check([board1, board2, board3])

  expect(result).toBe(false)
})

test('no winner for 3D 2 boards horizontal', () => {
  board1.moves = [null, null, null, marker, null, marker, null, null, null]
  board2.moves = [null, null, null, null, null, null, null, null, null]
  board3.moves = [null, null, null, null, marker, null, null, null, null]

  const result = subject.check([board1, board2, board3])

  expect(result).toBe(false)
})

test('no winner for 3D 2 boards vertical', () => {
  board1.moves = [null, null, null, null, null, null, marker, null, null]
  board2.moves = [marker, null, null, marker, null, null, null, null, null]
  board3.moves = [null, null, null, null, null, null, null, null, null]

  const result = subject.check([board1, board2, board3])

  expect(result).toBe(false)
})

test('no winner for 3D 2 boards diagonal', () => {
  board1.moves = [null, null, null, null, null, null, null, null, null]
  board2.moves = [null, null, marker, null, marker, null, null, null, null]
  board3.moves = [null, null, null, null, null, null, marker, null, null]

  const result = subject.check([board1, board2, board3])

  expect(result).toBe(false)
})

test('no winner', () => {
  board1.moves = [marker, null, null, null, null, null, null, null, null]
  board2.moves = [null, null, null, null, null, null, null, null, null]
  board3.moves = [null, null, null, null, null, null, null, null, null]

  const result = subject.check([board1, board2, board3])

  expect(result).toBe(false)
})

test('get side-to-side plane 1', () => {
  board1.moves = [marker, null, null, null, null, null, null, null, null]
  board2.moves = [marker, null, null, null, null, null, null, null, null]
  board3.moves = [marker, null, null, null, null, null, null, null, null]

  const expectedBoardMoves1 = [marker, marker, marker, null, null, null, null, null, null]
  const expectedBoardMoves2 = [null, null, null, null, null, null, null, null, null]
  const expectedBoardMoves3 = [null, null, null, null, null, null, null, null, null]

  const result = subject.getSideToSidePlanes([board1, board2, board3])

  expect(result[0].moves).toEqual(expectedBoardMoves1)
  expect(result[1].moves).toEqual(expectedBoardMoves2)
  expect(result[2].moves).toEqual(expectedBoardMoves3)
})

test('get side-to-side plane 2', () => {
  board1.moves = [null, null, null, marker, null, null, null, null, null]
  board2.moves = [null, null, null, null, marker, null, null, null, null]
  board3.moves = [null, null, null, null, null, marker, null, null, null]

  const expectedBoardMoves1 = [null, null, null, null, null, marker, null, null, null]
  const expectedBoardMoves2 = [null, null, null, null, marker, null, null, null, null]
  const expectedBoardMoves3 = [null, null, null, marker, null, null, null, null, null]

  const result = subject.getSideToSidePlanes([board1, board2, board3])

  expect(result[0].moves).toEqual(expectedBoardMoves1)
  expect(result[1].moves).toEqual(expectedBoardMoves2)
  expect(result[2].moves).toEqual(expectedBoardMoves3)
})

test('get side-to-side plane 3', () => {
  board1.moves = [null, null, null, marker, null, null, null, marker, null]
  board2.moves = [marker, null, null, null, null, marker, null, null, null]
  board3.moves = [null, null, marker, null, null, null, null, marker, null]

  const expectedBoardMoves1 = [null, marker, null, null, null, marker, null, null, null]
  const expectedBoardMoves2 = [null, null, null, null, null, null, marker, null, marker]
  const expectedBoardMoves3 = [marker, null, null, null, marker, null, null, null, null]

  const result = subject.getSideToSidePlanes([board1, board2, board3])

  expect(result[0].moves).toEqual(expectedBoardMoves1)
  expect(result[1].moves).toEqual(expectedBoardMoves2)
  expect(result[2].moves).toEqual(expectedBoardMoves3)
})

test('get top-to-bottom plane 1', () => {
  board1.moves = [marker, null, null, null, null, null, null, null, null]
  board2.moves = [marker, null, null, null, null, null, null, null, null]
  board3.moves = [marker, null, null, null, null, null, null, null, null]

  const expectedBoardMoves1 = [marker, null, null, marker, null, null, marker, null, null]
  const expectedBoardMoves2 = [null, null, null, null, null, null, null, null, null]
  const expectedBoardMoves3 = [null, null, null, null, null, null, null, null, null]

  const result = subject.getTopToBottomPlanes([board1, board2, board3])

  expect(result[0].moves).toEqual(expectedBoardMoves1)
  expect(result[1].moves).toEqual(expectedBoardMoves2)
  expect(result[2].moves).toEqual(expectedBoardMoves3)
})

test('get top-to-bottom plane 2', () => {
  board1.moves = [null, null, null, marker, null, null, null, null, null]
  board2.moves = [null, null, null, null, marker, null, null, null, null]
  board3.moves = [null, null, null, null, null, marker, null, null, null]

  const expectedBoardMoves1 = [null, null, null, null, null, null, null, null, null]
  const expectedBoardMoves2 = [null, null, marker, null, marker, null, marker, null, null]
  const expectedBoardMoves3 = [null, null, null, null, null, null, null, null, null]

  const result = subject.getTopToBottomPlanes([board1, board2, board3])

  expect(result[0].moves).toEqual(expectedBoardMoves1)
  expect(result[1].moves).toEqual(expectedBoardMoves2)
  expect(result[2].moves).toEqual(expectedBoardMoves3)
})

test('get top-to-bottom plane 3', () => {
  board1.moves = [null, null, null, marker, null, null, null, marker, null]
  board2.moves = [marker, null, null, null, null, marker, null, null, null]
  board3.moves = [null, null, marker, null, null, null, null, marker, null]

  const expectedBoardMoves1 = [null, null, marker, marker, null, null, null, null, null]
  const expectedBoardMoves2 = [null, null, null, null, null, marker, marker, null, null]
  const expectedBoardMoves3 = [null, marker, null, null, null, null, null, marker, null]

  const result = subject.getTopToBottomPlanes([board1, board2, board3])

  expect(result[0].moves).toEqual(expectedBoardMoves1)
  expect(result[1].moves).toEqual(expectedBoardMoves2)
  expect(result[2].moves).toEqual(expectedBoardMoves3)
})

function getSquares(boardIndex, markers) {
  let squares = []
  for (let i=0; i<9; i++) {
    squares.push(new Square(markers[i], [boardIndex,i]))
  }
  return squares
}