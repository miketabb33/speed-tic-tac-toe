import React from 'react'
import renderer from 'react-test-renderer'
import TextDisplay from '../../views/text-display.js'

test('render xFirst', () => {
	const subject = renderer.create(
		<TextDisplay value = { TextDisplay.xFirst } />
	)

	const result = subject.toJSON()
	expect(result).toMatchSnapshot()
})

test('render xTurn', () => {
	const subject = renderer.create(
		<TextDisplay value = { TextDisplay.turn("X") } />
	)

	const result = subject.toJSON()
	expect(result).toMatchSnapshot()
})

test('render oTurn', () => {
	const subject = renderer.create(
		<TextDisplay value = { TextDisplay.turn("O") } />
	)

	const result = subject.toJSON()
	expect(result).toMatchSnapshot()
})

test('render xWin', () => {
	const subject = renderer.create(
		<TextDisplay value = { TextDisplay.winner("X") } />
	)

	const result = subject.toJSON()
	expect(result).toMatchSnapshot()
})

test('render oWin', () => {
	const subject = renderer.create(
		<TextDisplay value = { TextDisplay.winner("O") } />
	)

	const result = subject.toJSON()
	expect(result).toMatchSnapshot()
})

test('render draw', () => {
	const subject = renderer.create(
		<TextDisplay value = { TextDisplay.draw } />
	)

	const result = subject.toJSON()
	expect(result).toMatchSnapshot()
})