export default class Player {
  #playerMarkers = ["X", "O"]
  #currentPlayerIndex = 0

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
