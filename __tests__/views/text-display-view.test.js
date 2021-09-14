import React from 'react'
import renderer from 'react-test-renderer'
import TextDisplayView from '../../views/text-display-view.js'

test('render xFirst', () => {
	const subject = renderer.create(
		<TextDisplayView value = { TextDisplayView.xFirst } />
	)

	const result = subject.toJSON()
	expect(result).toMatchSnapshot()
})

test('render xTurn', () => {
	const subject = renderer.create(
		<TextDisplayView value = { TextDisplayView.turn("X") } />
	)

	const result = subject.toJSON()
	expect(result).toMatchSnapshot()
})

test('render oTurn', () => {
	const subject = renderer.create(
		<TextDisplayView value = { TextDisplayView.turn("O") } />
	)

	const result = subject.toJSON()
	expect(result).toMatchSnapshot()
})

test('render xWin', () => {
	const subject = renderer.create(
		<TextDisplayView value = { TextDisplayView.winner("X") } />
	)

	const result = subject.toJSON()
	expect(result).toMatchSnapshot()
})

test('render oWin', () => {
	const subject = renderer.create(
		<TextDisplayView value = { TextDisplayView.winner("O") } />
	)

	const result = subject.toJSON()
	expect(result).toMatchSnapshot()
})

test('render draw', () => {
	const subject = renderer.create(
		<TextDisplayView value = { TextDisplayView.draw } />
	)

	const result = subject.toJSON()
	expect(result).toMatchSnapshot()
})