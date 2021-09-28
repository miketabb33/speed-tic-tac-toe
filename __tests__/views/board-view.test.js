import React from 'react'
import renderer from 'react-test-renderer'
import BoardView from '../../views/board-view'
import MockBoard from '../../mocks/mock-board'

const whateverIndex = 1
const mockBoard = new MockBoard

test('render', () => {
	const subject = renderer.create(
		<BoardView 
			squares = { mockBoard.getSquares(whateverIndex, ['X']) }
			boardIndex = { whateverIndex }
		/>
	)
	
	const result = subject.toJSON()
	expect(result).toMatchSnapshot()
})