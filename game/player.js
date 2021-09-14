export default class Player {
  #playerMarkers = []
  #currentPlayerIndex = 0

	constructor(playerMarkers) {
		this.#playerMarkers = playerMarkers
	}

  current() {
		return this.#playerMarkers[this.#currentPlayerIndex]
	}

	next() {
		const nextPlayerIndex = this.#currentPlayerIndex + 1
		if (nextPlayerIndex >= this.#playerMarkers.length) {
			this.#currentPlayerIndex = 0
		} else {
			this.#currentPlayerIndex = nextPlayerIndex
		}
	}
}
