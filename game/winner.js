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

  check(boards) {
		if (this.isolatedBoardWinner(boards)) { return true }
		if (this.samePosition3DWinner(boards)) { return true }
    if (this.winner3D(boards)) { return true }
    return false
	}

  isolatedBoardWinner(boards) {
		for (var i = 0; i < boards.length; i++) {
			const board = boards[i]
      for (var j = 0; j < this.winningVariations.length; j++) {
        const [a, b, c] = this.winningVariations[j];
        if (board.moves[a] && board.moves[a] === board.moves[b] && board.moves[a] === board.moves[c]) {
          return true
        }
      }
		}
	}

  samePosition3DWinner(boards) {
		for (var i = 0; i < 9; i++) {
			let currentCombo = []
			for (var j = 0; j < boards.length; j++) {
				const board = boards[j]
				currentCombo.push(board.moves[i])
			}
			if (this.isWinningCombination(currentCombo)) { return true }
		}
  }

  winner3D(boards) {
    for (var i = 0; i< this.winningVariations.length; i++) {
      const variation = this.winningVariations[i]
      let currentCombo = []
      for (var j = 0; j < boards.length; j++) {
        const board = boards[j]
        currentCombo.push(board.moves[variation[j]])
      }
      if (this.isWinningCombination(currentCombo)) { return true }
    }
  }

  isWinningCombination(combination) {
    if (combination[0] && combination[0] == combination[1] && combination[0] == combination[2]) {
      return true
    }
  }
}