import Board from "./board"

export default class Winner {
  #winningVariations = [
		[0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
	]

  check(board: Board): number[][] | undefined {
    const squares = board.squares
    for (let i=0; i<this.#winningVariations.length; i++) {
      const [a, b, c] = this.#winningVariations[i]
      if (squares[a].marker && squares[a].marker === squares[b].marker && squares[a].marker === squares[c].marker) {
        squares[a].winningMarker = true
        squares[b].winningMarker = true
        squares[c].winningMarker = true
        return [squares[a].indexPath, squares[b].indexPath, squares[c].indexPath]
      }
    }
  }
}