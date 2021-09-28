import React from 'react'
import renderer from 'react-test-renderer'
import GameView from '../../views/game-view'

test('render', () => {
	const subject = renderer.create(
		<GameView />
	)

	const result = subject.toJSON()
	expect(result).toMatchSnapshot()
})