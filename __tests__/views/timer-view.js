import React from 'react'
import renderer from 'react-test-renderer'
import TimerView from '../../views/timer-view'

test('render', () => {
	const subject = renderer.create(
		<TimerView />
	)

	const result = subject.toJSON()
	expect(result).toMatchSnapshot()
})