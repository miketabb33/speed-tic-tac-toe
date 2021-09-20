import React from 'react'
import renderer from 'react-test-renderer'
import BoardView from '../../views/board-view.js'

const whateverIndex = 1

test('render', () => {
	const subject = renderer.create(
		<BoardView 
			moves = { ["X"] }
			boardIndex = { whateverIndex }
		/>
	)

	const result = subject.toJSON()
	expect(result).toMatchSnapshot()
})