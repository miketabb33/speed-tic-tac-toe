import React from 'react'
import renderer from 'react-test-renderer'
import SquareView from '../../views/square-view.js'

test('render empty', () => {
	const subject = renderer.create(
		<SquareView 
			onClick = { () => {} }
		/>
	)

	const result = subject.toJSON()
	expect(result).toMatchSnapshot()
})

test('render x', () => {
	const subject = renderer.create(
		<SquareView 
		 	value = "x"
			onClick = { () => {} }
		/>
	)

	const result = subject.toJSON()
	expect(result).toMatchSnapshot()
})

test('render o', () => {
	const subject = renderer.create(
		<SquareView 
		 	value = "o"
			onClick = { () => {} }
		/>
	)

	const result = subject.toJSON()
	expect(result).toMatchSnapshot()
})