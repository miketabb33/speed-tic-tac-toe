import React from 'react'
import renderer from 'react-test-renderer'
import Square from '../../views/square.js'

test('render empty', () => {
	const square = renderer.create(
		<Square 
			onClick = { () => {} }
		/>
	)

	const result = square.toJSON()
	expect(result).toMatchSnapshot()
})

test('render x', () => {
	const square = renderer.create(
		<Square 
		 	value = "x"
			onClick = { () => {} }
		/>
	)

	const result = square.toJSON()
	expect(result).toMatchSnapshot()
})

test('render o', () => {
	const square = renderer.create(
		<Square 
		 	value = "o"
			onClick = { () => {} }
		/>
	)

	const result = square.toJSON()
	expect(result).toMatchSnapshot()
})