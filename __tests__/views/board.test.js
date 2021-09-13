import React from 'react'
import renderer from 'react-test-renderer'
import Board from '../../views/board.js'

test('render', () => {
	const subject = renderer.create(
		<Board moves = { ["X"] }/>
	)

	const result = subject.toJSON()
	expect(result).toMatchSnapshot()
})