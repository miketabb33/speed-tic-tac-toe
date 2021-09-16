import React from 'react'
import renderer from 'react-test-renderer'
import TimerInputView from '../../views/timer-input-view'

test('render xFirst', () => {
	const subject = renderer.create(
		<TimerInputView />
	)

	const result = subject.toJSON()
	expect(result).toMatchSnapshot()
})