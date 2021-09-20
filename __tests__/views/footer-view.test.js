import React from 'react'
import renderer from 'react-test-renderer'
import FooterView from '../../views/footer-view'

test('render', () => {
	const subject = renderer.create(
		<FooterView />
	)

	const result = subject.toJSON()
	expect(result).toMatchSnapshot()
})