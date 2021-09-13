import React from 'react'
import renderer from 'react-test-renderer'
import Square from '../../views/square.js'

test('render empty', () => {
	const subject = renderer.create(
		<Square 
			onClick = { () => {} }
		/>
	)

	const result = subject.toJSON()
	expect(result).toMatchSnapshot()
})

test('render x', () => {
	const subject = renderer.create(
		<Square 
		 	value = "x"
			onClick = { () => {} }
		/>
	)

	const result = subject.toJSON()
	expect(result).toMatchSnapshot()
})

test('render o', () => {
	const subject = renderer.create(
		<Square 
		 	value = "o"
			onClick = { () => {} }
		/>
	)

	const result = subject.toJSON()
	expect(result).toMatchSnapshot()
})