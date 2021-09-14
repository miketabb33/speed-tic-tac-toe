import Player from '../../game/player.js'

let subject = new Player

test('currentPlayer nextPlayer', () => {
	expect(subject.current()).toBe("X")

	subject.next()

	expect(subject.current()).toBe("O")

	subject.next()

	expect(subject.current()).toBe("X")
})