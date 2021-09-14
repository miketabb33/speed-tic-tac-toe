import React from 'react'
import renderer from 'react-test-renderer'
import BoardView from '../../views/board-view.js'

test('render', () => {
	const subject = renderer.create(
		<BoardView moves = { ["X"] }/>
	)

	const result = subject.toJSON()
	expect(result).toMatchSnapshot()
})