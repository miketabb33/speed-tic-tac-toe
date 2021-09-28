export default class Player {
  #playerMarkers: string[]
  #currentPlayerIndex = 0

	constructor(playerMarkers: string[]) {
		this.#playerMarkers = playerMarkers
	}

  current(): string {
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
