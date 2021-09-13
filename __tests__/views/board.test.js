import React from 'react'
import renderer from 'react-test-renderer'
import Board from '../../views/board.js'

test('render', () => {
	const board = renderer.create(
		<Board />
	)

	const result = board.toJSON()
	expect(result).toMatchSnapshot()
})