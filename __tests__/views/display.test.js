import React from 'react'
import renderer from 'react-test-renderer'
import Display from '../../views/display.js'

test('render xFirst', () => {
	const display = renderer.create(
		<Display value = { Display.xFirst } />
	)

	const result = display.toJSON()
	expect(result).toMatchSnapshot()
})

test('render xTurn', () => {
	const display = renderer.create(
		<Display value = { Display.xTurn} />
	)

	const result = display.toJSON()
	expect(result).toMatchSnapshot()
})

test('render oTurn', () => {
	const display = renderer.create(
		<Display value = { Display.oTurn} />
	)

	const result = display.toJSON()
	expect(result).toMatchSnapshot()
})

test('render xWin', () => {
	const display = renderer.create(
		<Display value = { Display.xWin} />
	)

	const result = display.toJSON()
	expect(result).toMatchSnapshot()
})

test('render oWin', () => {
	const display = renderer.create(
		<Display value = { Display.oWin} />
	)

	const result = display.toJSON()
	expect(result).toMatchSnapshot()
})