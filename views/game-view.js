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
    this.game = new Game(
      (marker, time) => this.timerValueDidChange(marker, time),
      (winnerMarker) => this.timerDidHit0(winnerMarker)
    )

    this.state = {
      moves: [
        this.game.getMovesForBoard(0), 
        this.game.getMovesForBoard(1),
        this.game.getMovesForBoard(2)
      ],
      textDisplay: TextDisplayView.xFirst,
      currentPlayer: this.game.getCurrentPlayer(),
      xRemainingTime: 1000,
      oRemainingTime: 1000
    }
  }

  render() {
    return (
      <div>
        <InfoBarView 
          textDisplay = { this.state.textDisplay } 
          activePlayer = { this.state.currentPlayer }
          xRemainingTime = { this.state.xRemainingTime }
          oRemainingTime = { this.state.oRemainingTime }
        />
        <TimeInputView 
          didChangeTime = { (newTime) => this.didChangeTotalTime(newTime) }
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
      textDisplay: displayContent, 
      currentPlayer: this.game.getCurrentPlayer()
    })
  }

  didChangeTotalTime(time) {
    console.log(time)
  }

  timerValueDidChange(marker, time) {
    if (marker == this.game.playerMarkers[0]) {
      this.setState({ xRemainingTime: time })
    } else if (marker == this.game.playerMarkers[1]) {
      this.setState({ oRemainingTime: time })
    }
  }

  timerDidHit0(winnerMarker) {
    this.game.setGameOver()
    this.setState({
      textDisplay: TextDisplayView.winner(winnerMarker)
    }) 
  }
}