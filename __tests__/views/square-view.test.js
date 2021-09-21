import React from 'react'
import renderer from 'react-test-renderer'
import SquareView from '../../views/square-view.js'
import Square from '../../game/square.js'

const whateverIndex = 1

test('render empty', () => {
	const subject = renderer.create(
		<SquareView 
			square = { new Square(null, [0,0]) }
			onClick = { () => {} }
			squareIndex = { whateverIndex }
			boardIndex = { whateverIndex }
		/>
	)

	const result = subject.toJSON()
	expect(result).toMatchSnapshot()
})

test('render x', () => {
	const subject = renderer.create(
		<SquareView 
			square = { new Square('x', [0,0]) }
			onClick = { () => {} }
			squareIndex = { whateverIndex }
			boardIndex = { whateverIndex }
		/>
	)

	const result = subject.toJSON()
	expect(result).toMatchSnapshot()
})

test('render o', () => {
	const subject = renderer.create(
		<SquareView 
		  square = { new Square('o', [0,0]) }
			onClick = { () => {} }
			squareIndex = { whateverIndex }
			boardIndex = { whateverIndex }
		/>
	)

	const result = subject.toJSON()
	expect(result).toMatchSnapshot()
})