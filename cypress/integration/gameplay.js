describe("gameplay", ()=> {
	beforeEach(() => {
		cy.visit("http://localhost:3000/")
	})

	it('gameplay', () => {
		cy.get('.square').contains('x')
	})
})