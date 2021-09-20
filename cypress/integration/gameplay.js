//Board: cy.get('[class*=boards] > :nth-child(BOARD)')
//Spot: cy.get('[class*=boards] > :nth-child(BOARD) > [class*=boardSquares] > :nth-child(ROW) > :nth-child(SPOT)')
//Timer Input: cy.get('[class*=timerInputView]').find('input')
//Timer Input View: cy.get('[class*=timerInputView]'))

//Text Display: cy.get('[class*=textDisplay]')
//X Timer View: cy.get('[class*=topBar] > :nth-child(1)')
//O Timer View: cy.get('[class*=topBar] > :nth-child(3)')

//X Timer Text: cy.get('[class*=topBar] > :nth-child(1) > [class*=timerViewText]')
//O Timer Text: cy.get('[class*=topBar] > :nth-child(3) > [class*=timerViewText]')

//X Timer Image: cy.get('[class*=topBar] > :nth-child(1)').find('img')
//O Timer Image: cy.get('[class*=topBar] > :nth-child(3)').find('img')

describe("gameplay", ()=> {
	beforeEach(() => {
		cy.visit("http://localhost:3000/")
	})

	it('gameplay', () => {
		onLoadCheck()
		changeGameTime()
	})

	function onLoadCheck() {
		cy.get('[class*=boards] > :nth-child(1)').should('be.visible')
		cy.get('[class*=boards] > :nth-child(2)').should('be.visible')
		cy.get('[class*=boards] > :nth-child(3)').should('be.visible')
		cy.get('[class*=timerInputView]').should('be.visible')
		cy.get('[class*=timerInputView]').find('input').should('have.attr', 'value', 10)
		cy.get('[class*=textDisplay]').should('have.text', 'X Goes First')
		
		boardSpotExistance()
		playerTimerViewOnLoadCheck()
	}

	function changeGameTime() {
		cy.get('[class*=timerInputView]').find('input').type("32")
		cy.get('[class*=timerInputView]').find('input').should('have.attr', 'value', 10)
		cy.get('[class*=timerInputView]').find('input').type("{backspace}")
		cy.get('[class*=topBar] > :nth-child(1) > [class*=timerViewText]').should('have.text', '01:00')
		cy.get('[class*=topBar] > :nth-child(3) > [class*=timerViewText]').should('have.text', '01:00')
		cy.get('[class*=timerInputView]').find('input').type("{backspace}")
		cy.get('[class*=topBar] > :nth-child(1) > [class*=timerViewText]').should('have.text', '00:00')
		cy.get('[class*=topBar] > :nth-child(3) > [class*=timerViewText]').should('have.text', '00:00')
	}

	function playerTimerViewOnLoadCheck() {
		cy.get('[class*=topBar] > :nth-child(1)').should('have.class', 'TopBarStyles_timerViewActiveX__2vqax')
		cy.get('[class*=topBar] > :nth-child(3)').should('have.class', 'TopBarStyles_timerViewInactive__2vvJ5')
		cy.get('[class*=topBar] > :nth-child(1)').find('img').should('be.visible')
		cy.get('[class*=topBar] > :nth-child(3)').find('img').should('be.visible')
		cy.get('[class*=topBar] > :nth-child(1) > [class*=timerViewText]').should('have.text','10:00')
		cy.get('[class*=topBar] > :nth-child(3) > [class*=timerViewText]').should('have.text','10:00')
	}

	function boardSpotExistance() {
		cy.get('[class*=boards] > :nth-child(1) > [class*=boardSquares] > :nth-child(1) > :nth-child(1)').should('be.visible')
		cy.get('[class*=boards] > :nth-child(1) > [class*=boardSquares] > :nth-child(1) > :nth-child(2)').should('be.visible')
		cy.get('[class*=boards] > :nth-child(1) > [class*=boardSquares] > :nth-child(1) > :nth-child(3)').should('be.visible')
		cy.get('[class*=boards] > :nth-child(1) > [class*=boardSquares] > :nth-child(2) > :nth-child(1)').should('be.visible')
		cy.get('[class*=boards] > :nth-child(1) > [class*=boardSquares] > :nth-child(2) > :nth-child(2)').should('be.visible')
		cy.get('[class*=boards] > :nth-child(1) > [class*=boardSquares] > :nth-child(2) > :nth-child(3)').should('be.visible')
		cy.get('[class*=boards] > :nth-child(1) > [class*=boardSquares] > :nth-child(3) > :nth-child(1)').should('be.visible')
		cy.get('[class*=boards] > :nth-child(1) > [class*=boardSquares] > :nth-child(3) > :nth-child(2)').should('be.visible')
		cy.get('[class*=boards] > :nth-child(1) > [class*=boardSquares] > :nth-child(3) > :nth-child(3)').should('be.visible')

		cy.get('[class*=boards] > :nth-child(2) > [class*=boardSquares] > :nth-child(1) > :nth-child(2)').should('be.visible')
		cy.get('[class*=boards] > :nth-child(2) > [class*=boardSquares] > :nth-child(1) > :nth-child(3)').should('be.visible')
		cy.get('[class*=boards] > :nth-child(2) > [class*=boardSquares] > :nth-child(1) > :nth-child(1)').should('be.visible')
		cy.get('[class*=boards] > :nth-child(2) > [class*=boardSquares] > :nth-child(2) > :nth-child(1)').should('be.visible')
		cy.get('[class*=boards] > :nth-child(2) > [class*=boardSquares] > :nth-child(2) > :nth-child(2)').should('be.visible')
		cy.get('[class*=boards] > :nth-child(2) > [class*=boardSquares] > :nth-child(2) > :nth-child(3)').should('be.visible')
		cy.get('[class*=boards] > :nth-child(2) > [class*=boardSquares] > :nth-child(3) > :nth-child(1)').should('be.visible')
		cy.get('[class*=boards] > :nth-child(2) > [class*=boardSquares] > :nth-child(3) > :nth-child(2)').should('be.visible')
		cy.get('[class*=boards] > :nth-child(2) > [class*=boardSquares] > :nth-child(3) > :nth-child(3)').should('be.visible')

		cy.get('[class*=boards] > :nth-child(3) > [class*=boardSquares] > :nth-child(1) > :nth-child(2)').should('be.visible')
		cy.get('[class*=boards] > :nth-child(3) > [class*=boardSquares] > :nth-child(1) > :nth-child(3)').should('be.visible')
		cy.get('[class*=boards] > :nth-child(3) > [class*=boardSquares] > :nth-child(1) > :nth-child(1)').should('be.visible')
		cy.get('[class*=boards] > :nth-child(3) > [class*=boardSquares] > :nth-child(2) > :nth-child(1)').should('be.visible')
		cy.get('[class*=boards] > :nth-child(3) > [class*=boardSquares] > :nth-child(2) > :nth-child(2)').should('be.visible')
		cy.get('[class*=boards] > :nth-child(3) > [class*=boardSquares] > :nth-child(2) > :nth-child(3)').should('be.visible')
		cy.get('[class*=boards] > :nth-child(3) > [class*=boardSquares] > :nth-child(3) > :nth-child(1)').should('be.visible')
		cy.get('[class*=boards] > :nth-child(3) > [class*=boardSquares] > :nth-child(3) > :nth-child(2)').should('be.visible')
		cy.get('[class*=boards] > :nth-child(3) > [class*=boardSquares] > :nth-child(3) > :nth-child(3)').should('be.visible')
	}
})