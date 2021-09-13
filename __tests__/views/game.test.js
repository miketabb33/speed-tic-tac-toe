import React from 'react'
import renderer from 'react-test-renderer'
import Game from '../../views/game.js'

test('render', () => {
	const subject = renderer.create(
		<Game />
	)

	const result = subject.toJSON()
	expect(result).toMatchSnapshot()
})