import React from 'react'
import renderer from 'react-test-renderer'
import TimerView from '../../views/timer-view'

test('render x active', () => {
	const subject = renderer.create(
		<TimerView player={'X'} activePlayer={'X'} remainingTimeInHundredthsOfSeconds={5} />
	)

	const result = subject.toJSON()
	expect(result).toMatchSnapshot()
})

test('render x inactive', () => {
	const subject = renderer.create(
		<TimerView player={'X'} activePlayer={'O'} remainingTimeInHundredthsOfSeconds={5}/>
	)

	const result = subject.toJSON()
	expect(result).toMatchSnapshot()
})

test('render o active', () => {
	const subject = renderer.create(
		<TimerView player={'O'} activePlayer={'O'} remainingTimeInHundredthsOfSeconds={5}/>
	)

	const result = subject.toJSON()
	expect(result).toMatchSnapshot()
})

test('render o inactive', () => {
	const subject = renderer.create(
		<TimerView player={'O'} activePlayer={'X'} remainingTimeInHundredthsOfSeconds={5}/>
	)

	const result = subject.toJSON()
	expect(result).toMatchSnapshot()
})

test('render x no time', () => {
	const subject = renderer.create(
		<TimerView player={'X'} activePlayer={'X'} remainingTimeInHundredthsOfSeconds={0}/>
	)

	const result = subject.toJSON()
	expect(result).toMatchSnapshot()
})

test('render o no time', () => {
	const subject = renderer.create(
		<TimerView player={'O'} activePlayer={'O'} remainingTimeInHundredthsOfSeconds={0}/>
	)

	const result = subject.toJSON()
	expect(result).toMatchSnapshot()
})


test('render o no time', () => {
	const subject = renderer.create(
		<TimerView player={'O'} activePlayer={'O'} remainingTimeInHundredthsOfSeconds={0}/>
	)

	const result = subject.toJSON()
	expect(result).toMatchSnapshot()
})

test('render x below 0.00', () => {
	const subject = renderer.create(
		<TimerView player={'X'} activePlayer={'X'} remainingTimeInHundredthsOfSeconds={-49}/>
	)

	const result = subject.toJSON()
	expect(result).toMatchSnapshot()
})

test('render time at 10 seconds', () => {
	const subject = renderer.create(
		<TimerView player={'X'} activePlayer={'X'} remainingTimeInHundredthsOfSeconds={10000}/>
	)

	const result = subject.toJSON()
	expect(result).toMatchSnapshot()
})

test('render time at 50 seconds', () => {
	const subject = renderer.create(
		<TimerView player={'X'} activePlayer={'X'} remainingTimeInHundredthsOfSeconds={50000}/>
	)

	const result = subject.toJSON()
	expect(result).toMatchSnapshot()
})

test('render time at 5 minutes and 50.01 seconds', () => {
	const subject = renderer.create(
		<TimerView player={'X'} activePlayer={'X'} remainingTimeInHundredthsOfSeconds={350001}/>
	)

	const result = subject.toJSON()
	expect(result).toMatchSnapshot()
})