import React from 'react'
import Head from 'next/head'
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
      squares: [
        this.game.getSquaresForBoard(0), 
        this.game.getSquaresForBoard(1),
        this.game.getSquaresForBoard(2)
      ],
      textDisplay: TextDisplayView.xFirst,
      currentPlayer: this.game.getCurrentPlayer(),
      xRemainingTime: 1000,
      oRemainingTime: 1000,
      hideTimeInputView: false,
    }
  }

  render() {
    return (
      <div>
        <Head> 
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Kulim+Park&display=swap" rel="stylesheet" />
        </Head>
        <InfoBarView 
          textDisplay = { this.state.textDisplay } 
          activePlayer = { this.state.currentPlayer }
          xRemainingTime = { this.state.xRemainingTime }
          oRemainingTime = { this.state.oRemainingTime }
        />
        <TimeInputView 
          didChangeTime = { (newTime) => this.didChangeTotalTime(newTime) }
          hide = { this.state.hideTimeInputView }
        />
        <BoardsView 
          squares = { this.state.squares }
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
      squares: [
        this.game.getSquaresForBoard(0), 
        this.game.getSquaresForBoard(1),
        this.game.getSquaresForBoard(2)
      ],
      textDisplay: displayContent, 
      currentPlayer: this.game.getCurrentPlayer(),
      hideTimeInputView: true
    })
  }

  didChangeTotalTime(time) {
    this.game.setTimers(time)
    this.setState({
      xRemainingTime: time,
      oRemainingTime: time
    })
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