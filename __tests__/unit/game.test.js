import Board from '../../game/board.js'
import Game from '../../game/game.js'
import GameState from '../../game/game-state.js'

let subject
let board1 
let board2 
let board3

beforeEach(() => {
  board1 = new Board
  board2 = new Board
  board3 = new Board

	subject = new Game(board1, board2, board3)
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

test('getPostMoveGameState winner', () => {
  board1.moves = ['X', 'X', 'X', null, null, null, null, null, null]

  const result = subject.getPostMoveGameState()

  expect(result).toBe(GameState.winner)
})

test('getPostMoveGameState draw', () => {
  // board1.moves = ['X', 'O', 'X', 'X', 'X', 'O', 'O', 'X', 'O']
  // board2.moves = ['X', 'O', 'X', 'X', 'X', 'O', 'O', 'X', 'O']
  // board3.moves = ['X', 'O', 'X', 'X', 'X', 'O', 'O', 'X', 'O']

  // const result = subject.getPostMoveGameState()

  // expect(result).toBe(GameState.draw)
})

test('getPostMoveGameState readyForNextMove', () => {
  board1.moves = ['X', null, null, null, null, null, null, null, null]

  const result = subject.getPostMoveGameState()

  expect(result).toBe(GameState.readyForNextMove)
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