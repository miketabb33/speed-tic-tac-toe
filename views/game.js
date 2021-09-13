import React from 'react'
import styles from '../styles/Styles.module.css'
import Board from '../views/board.js'
import TextDisplay from '../views/text-display.js'
import GameManager from '../game/game-manager.js'

export default class Game extends React.Component {
  gameManager = new GameManager

  render() {
    return (
      <div>
        <TextDisplay value = { TextDisplay.xFirst }/>
        <Board />
      </div>
    )
  }
}