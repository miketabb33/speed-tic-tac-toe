import React from 'react'
import renderer from 'react-test-renderer'
import TimeInputView from '../../views/time-input-view'

test('render', () => {
	const subject = renderer.create(
		<TimeInputView />
	)

	const result = subject.toJSON()
	expect(result).toMatchSnapshot()
})