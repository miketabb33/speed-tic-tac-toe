import React from 'react'
import GameState from '../game/game-state'
import BoardsView from './boards-view.js'
import Game from '../game/game.js'
import TimeInputView from './time-input-view'
import TextDisplayView from './text-display-view'
import InfoBarView from './info-bar-view'

export default class GameView extends React.Component {
  constructor(props) {
    super(props)
    this.game = new Game()

    this.state = {
      moves: [
        this.game.getMovesForBoard(0), 
        this.game.getMovesForBoard(1),
        this.game.getMovesForBoard(2)
      ],
      textDisplay: TextDisplayView.xFirst
    }
  }

  render() {
    return (
      <div>
        <InfoBarView textDisplay = { this.state.textDisplay } />
        <TimeInputView 
          didChangeTime = { (newTime) => this.didChangeTime(newTime) }
        />
        <BoardsView 
          moves = { this.state.moves }
          onClick = { (squareIndex, boardIndex) => this.didClickSquare(squareIndex, boardIndex) }
        />
      </div>
    )
  }

  didClickSquare(squareIndex, boardIndex) {
    let displayContent
    const [state, marker] = this.game.attemptToAddMove(squareIndex, boardIndex)
    if (state == GameState.readyForNextMove) {
      displayContent = TextDisplayView.turn(marker)
    } else if (state == GameState.winner) {
      displayContent = TextDisplayView.winner(marker)
    } else if (state == GameState.draw) {
      displayContent = TextDisplayView.draw
    } else {
      return
    }

    this.setState({
      moves: [
        this.game.getMovesForBoard(0), 
        this.game.getMovesForBoard(1),
        this.game.getMovesForBoard(2)
      ],
      textDisplay: displayContent
    })
  }

  didChangeTime(time) {
    console.log(time)
  }
}