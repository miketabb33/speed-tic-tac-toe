import Board from "../../../game/board"
import Winner from "../../../game/winner"

let subject
let board1 
let board2 
let board3

const marker = 'X'

beforeEach(() => {
  subject = new Winner()

  board1 = new Board
  board2 = new Board
  board3 = new Board
})

test('isolatedBoardWinner horizontal', () => {
  board1.moves = [null, null, null, null, null, null, null, null, null]
  board2.moves = [null, null, null, null, null, null, null, null, null]
  board3.moves = [marker, marker, marker, null, null, null, null, null, null]

  const result = subject.isolatedBoardWinner([board1, board2, board3])

  expect(result).toBe(true)
})

test('isolatedBoardWinner vertical', () => {
  board1.moves = [marker, null, null, marker, null, null, marker, null, null]
  board2.moves = [null, null, null, null, null, null, null, null, null]
  board3.moves = [null, null, null, null, null, null, null, null, null]

  const result = subject.isolatedBoardWinner([board1, board2, board3])

  expect(result).toBe(true)
})

test('isolatedBoardWinner diagonal', () => {
  board1.moves = [marker, null, null, null, marker, null, null, null, marker]
  board2.moves = [null, null, null, null, null, null, null, null, null]
  board3.moves = [null, null, null, null, null, null, null, null, null]

  const result = subject.isolatedBoardWinner([board1, board2, board3])

  expect(result).toBe(true)
})

test('samePosition3DWinner first position', () => {
  board1.moves = [marker, null, null, null, null, null, null, null, null]
  board2.moves = [marker, null, null, null, null, null, null, null, null]
  board3.moves = [marker, null, null, null, null, null, null, null, null]

  const result = subject.samePosition3DWinner([board1, board2, board3])

  expect(result).toBe(true)
})

test('samePosition3DWinner other position', () => {
  board1.moves = [null, null, null, null, marker, null, null, null, null]
  board2.moves = [null, null, null, null, marker, null, null, null, null]
  board3.moves = [null, null, null, null, marker, null, null, null, null]

  const result = subject.samePosition3DWinner([board1, board2, board3])

  expect(result).toBe(true)
})

test('winner3D horizontal first', () => {
  board1.moves = [marker, null, null, null, null, null, null, null, null]
  board2.moves = [null, marker, null, null, null, null, null, null, null]
  board3.moves = [null, null, marker, null, null, null, null, null, null]

  const result = subject.winner3D([board1, board2, board3])

  expect(result).toBe(true)
})

test('winner3D horizontal second', () => {
  board1.moves = [null, null, null, marker, null, null, null, null, null]
  board2.moves = [null, null, null, null, marker, null, null, null, null]
  board3.moves = [null, null, null, null, null, marker, null, null, null]

  const result = subject.winner3D([board1, board2, board3])

  expect(result).toBe(true)
})

test('winner3D horizontal third', () => {
  board1.moves = [null, null, null, null, null, null, marker, null, null]
  board2.moves = [null, null, null, null, null, null, null, marker, null]
  board3.moves = [null, null, null, null, null, null, null, null, marker]

  const result = subject.winner3D([board1, board2, board3])

  expect(result).toBe(true)
})

test('winner3D vertical first', () => {
  board1.moves = [marker, null, null, null, null, null, null, null, null]
  board2.moves = [null, null, null, marker, null, null, null, null, null]
  board3.moves = [null, null, null, null, null, null, marker, null, null]

  const result = subject.winner3D([board1, board2, board3])

  expect(result).toBe(true)
})

test('winner3D vertical second', () => {
  board1.moves = [null, marker, null, null, null, null, null, null, null]
  board2.moves = [null, null, null, null, marker, null, null, null, null]
  board3.moves = [null, null, null, null, null, null, null, marker, null]

  const result = subject.winner3D([board1, board2, board3])

  expect(result).toBe(true)
})

test('winner3D vertical third', () => {
  board1.moves = [null, null, marker, null, null, null, null, null, null]
  board2.moves = [null, null, null, null, null, marker, null, null, null]
  board3.moves = [null, null, null, null, null, null, null, null, marker]

  const result = subject.winner3D([board1, board2, board3])

  expect(result).toBe(true)
})

test('winner3D diagonal first', () => {
  board1.moves = [marker, null, null, null, null, null, null, null, null]
  board2.moves = [null, null, null, null, marker, null, null, null, null]
  board3.moves = [null, null, null, null, null, null, null, null, marker]

  const result = subject.winner3D([board1, board2, board3])

  expect(result).toBe(true)
})

test('winner3D diagonal second', () => {
  board1.moves = [null, null, marker, null, null, null, null, null, null]
  board2.moves = [null, null, null, null, marker, null, null, null, null]
  board3.moves = [null, null, null, null, null, null, marker, null, null]

  const result = subject.winner3D([board1, board2, board3])

  expect(result).toBe(true)
})
