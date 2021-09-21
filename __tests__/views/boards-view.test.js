import React from 'react'
import renderer from 'react-test-renderer'
import BoardsView from '../../views/boards-view.js'
import MockBoard from '../../mocks/mock-board.js'

const mockBoard = new MockBoard

test('render', () => {
  const squares1 = mockBoard.getSquares(0, [null, null, null, null, null, null, null, null, null])
  const squares2 = mockBoard.getSquares(1, [null, null, null, null, null, null, null, null, null])
  const squares3 = mockBoard.getSquares(2, [null, null, null, null, null, null, null, null, null])

	const subject = renderer.create(
    <BoardsView 
      squares = { [squares1, squares2, squares3] }
      onClick = { (squareIndex, boardIndex) => this.didClickSquare(squareIndex, boardIndex) }
    />
	)

	const result = subject.toJSON()
	expect(result).toMatchSnapshot()
})