import React from 'react'
import styles from '../styles/Styles.module.css'
import Board from '../views/board.js'
import TextDisplay from '../views/text-display.js'
import GameManager from '../game/game-manager.js'
import Player from '../game/player.js'

export default class Game extends React.Component {
  constructor(props) {
    super(props)
    this.gameManager = new GameManager
    this.player = new Player
    this.state = {
      moves: this.gameManager.moves,
      display: TextDisplay.xFirst
    }
  }

  render() {
    return (
      <div>
        <TextDisplay value = { this.state.display }/>
        <Board 
          moves = { this.state.moves } 
          onClick = { (i)=> this.didClickSquare(i) }
        />
      </div>
    )
  }

  didClickSquare(i) {
    const moveIsValid = !this.gameManager.isGameOver && this.gameManager.moveAvailable(i)
    if (!moveIsValid) { return }
    this.didClickValidSquare(i)
  }

  didClickValidSquare(i) {
    let displayContent
    const currentPlayer = this.player.current()
    this.gameManager.addMove(i, currentPlayer)

    const winner = this.gameManager.winner()
    if (winner) {
      displayContent = TextDisplay.winner(winner)
    } else {
      if (this.gameManager.anyAvailableMoves()) {
        this.player.next()
        displayContent = TextDisplay.turn(currentPlayer)
      } else {
        displayContent = TextDisplay.draw
      }
    }

    this.setState({
      moves: this.gameManager.moves,
      display: displayContent
    })
  }
}