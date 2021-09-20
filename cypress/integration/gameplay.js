describe("gameplay", ()=> {
	beforeEach(() => {
		cy.visit("http://localhost:3000/")
	})

	it('plays a game from start to finish', () => {
		cy.get('#time-input-view').should('be.visible')
		cy.get('#text-display-view').should('have.text', "X Goes First")

		cy.get('button#board-3-square-9').click()
		cy.get('img#x-marker-board-3-square-9')
		cy.get('#text-display-view').should('have.text', "O's Turn")

		cy.get('#time-input-view').should('not.be.visible')

		cy.get('button#board-3-square-8').click()
		cy.get('img#o-marker-board-3-square-8')
		cy.get('#text-display-view').should('have.text', "X's Turn")

		cy.get('button#board-2-square-5').click()
		cy.get('img#x-marker-board-2-square-5')
		cy.get('#text-display-view').should('have.text', "O's Turn")

		cy.get('button#board-1-square-2').click()
		cy.get('img#o-marker-board-1-square-2')
		cy.get('#text-display-view').should('have.text', "X's Turn")

		cy.get('button#board-1-square-1').click()
		cy.get('img#x-marker-board-1-square-1')
		cy.get('#text-display-view').should('have.text', "X is the Winner!")
	})
})