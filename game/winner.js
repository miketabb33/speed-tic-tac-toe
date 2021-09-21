export default class Winner {
  winningVariations = [
		[0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
	]

  check(board) {
    for (let i=0; i<this.winningVariations.length; i++) {
      const [a, b, c] = this.winningVariations[i]
      if (board.squares[a].marker && board.squares[a].marker === board.squares[b].marker && board.squares[a].marker === board.squares[c].marker) {
        return [a,b,c]
      }
    }
  }
}