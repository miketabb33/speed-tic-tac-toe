import React from 'react'
import renderer from 'react-test-renderer'
import TimeInputView from '../../views/time-input-view'

test('render not hidden', () => {
	const subject = renderer.create(
		<TimeInputView hide = {false} />
	)

	const result = subject.toJSON()
	expect(result).toMatchSnapshot()
})

test('render hidden', () => {
	const subject = renderer.create(
		<TimeInputView hide = {true} />
	)

	const result = subject.toJSON()
	expect(result).toMatchSnapshot()
})