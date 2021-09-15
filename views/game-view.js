import React from 'react'
import styles from '../styles/Styles.module.css'
import GameState from '../game/game-state'
import BoardsView from './boards-view.js'
import TextDisplayView from './text-display-view.js'
import Game from '../game/game.js'
import Player from '../game/player.js'
import Board from '../game/board'

export default class GameView extends React.Component {
  constructor(props) {
    super(props)

    const playerMarkers = ['X', 'O']
    const board1 = new Board
    const board2 = new Board
    const board3 = new Board

    this.game = new Game(board1, board2, board3)
    this.player = new Player(playerMarkers)
    
    this.state = {
      moves: [
        this.game.getMoves(0), 
        this.game.getMoves(1),
        this.game.getMoves(2)
      ],
      display: TextDisplayView.xFirst
    }
  }

  render() {
    return (
      <div>
        <TextDisplayView value = { this.state.display } />
        <BoardsView 
          moves = { this.state.moves }
          onClick = { (squareIndex, boardIndex) => this.didClickSquare(squareIndex, boardIndex) }
        />
      </div>
    )
  }

  didClickSquare(squareIndex, boardIndex) {
    let displayContent
    const result = this.game.attemptToAddMove(this.player.current(), squareIndex, boardIndex)
    if (result == GameState.readyForNextMove) {
      this.player.next()
      displayContent = TextDisplayView.turn(this.player.current())
    } else if (result == GameState.winner) {
      displayContent = TextDisplayView.winner(this.player.current())
    } else if (result == GameState.draw) {
      displayContent = TextDisplayView.draw
    } else {
      return
    }

    this.setState({
      moves: [
        this.game.getMoves(0), 
        this.game.getMoves(1),
        this.game.getMoves(2)
      ],
      display: displayContent
    })
  }
}