import Player from '../../../game/player'

let subject

beforeEach(() => {
	const playerMarkers = ['X', 'O']
	subject = new Player(playerMarkers)
})

test('currentPlayer nextPlayer', () => {
	expect(subject.current()).toBe('X')

	subject.next()

	expect(subject.current()).toBe('O')

	subject.next()

	expect(subject.current()).toBe('X')
})