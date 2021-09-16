import React from 'react'
import renderer from 'react-test-renderer'
import TimerView from '../../views/timer-view'

test('render x active', () => {
	const subject = renderer.create(
		<TimerView player={'X'} activePlayer={'X'} remainingTime={5} />
	)

	const result = subject.toJSON()
	expect(result).toMatchSnapshot()
})

test('render x inactive', () => {
	const subject = renderer.create(
		<TimerView player={'X'} activePlayer={'O'} remainingTime={5}/>
	)

	const result = subject.toJSON()
	expect(result).toMatchSnapshot()
})

test('render o active', () => {
	const subject = renderer.create(
		<TimerView player={'O'} activePlayer={'O'} remainingTime={5}/>
	)

	const result = subject.toJSON()
	expect(result).toMatchSnapshot()
})

test('render o inactive', () => {
	const subject = renderer.create(
		<TimerView player={'O'} activePlayer={'X'} remainingTime={5}/>
	)

	const result = subject.toJSON()
	expect(result).toMatchSnapshot()
})