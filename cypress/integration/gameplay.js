describe("gameplay", ()=> {
	beforeEach(() => {
		cy.visit("http://localhost:3000/")
	})

	it('first test', () => {
		cy.get('h1').contains('Welcome to')
	})
})