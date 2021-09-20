import Board from "../../../game/board"
import Winner from "../../../game/winner"

let subject
let board

const marker = 'X'

beforeEach(() => {
  subject = new Winner
  board = new Board
})

test('winner horizontal 1', () => {
  board.moves = [marker, marker, marker, null, null, null, null, null, null]

  const result = subject.check(board)

  expect(result).toBe(true) 
})

test('winner horizontal 2', () => {
  board.moves = [null, null, null, marker, marker, marker, null, null, null]

  const result = subject.check(board)

  expect(result).toBe(true) 
})

test('winner horizontal 3', () => {
  board.moves = [null, null, null, null, null, null, marker, marker, marker,]

  const result = subject.check(board)

  expect(result).toBe(true) 
})

test('winner vertical 1', () => {
  board.moves = [marker, null, null, marker, null, null, marker, null, null]

  const result = subject.check(board)

  expect(result).toBe(true) 
})

test('winner vertical 2', () => {
  board.moves = [null, marker, null, null, marker, null, null, marker, null]

  const result = subject.check(board)

  expect(result).toBe(true) 
})

test('winner vertical 3', () => {
  board.moves = [null, null, marker, null, null, marker, null, null, marker]

  const result = subject.check(board)

  expect(result).toBe(true) 
})

test('winner diagonal 1', () => {
  board.moves = [marker, null, null, null, marker, null, null, null, marker]

  const result = subject.check(board)

  expect(result).toBe(true) 
})

test('winner diagonal 2', () => {
  board.moves = [null, null, marker, null, marker, null, marker, null, null]

  const result = subject.check(board)

  expect(result).toBe(true) 
})

test('not winner', () => {
  board.moves = [null, null, null, null, marker, null, null, null, marker]

  const result = subject.check(board)

  expect(result).toBe(undefined) 
})