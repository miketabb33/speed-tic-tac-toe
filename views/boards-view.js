import React from 'react'
import BoardView from './board-view'
import gameStyles from '../styles/GameStyles.module.css'

export default class BoardsView extends React.Component {
  renderBoard(i, boardTitle) {
    return (
    <BoardView
      squares = { this.props.squares[i] } 
      boardIndex = { i }
      boardTitle = { boardTitle }
      onClick = { (squareIndex, boardIndex) => this.props.onClick(squareIndex, boardIndex) }
    />
    )
  }
  
  render() {
    return (
      <div className={ gameStyles.boards }>
        { this.renderBoard(0, 'Top') }
        { this.renderBoard(1, 'Middle') }
        { this.renderBoard(2, 'Bottom') }
      </div>
    )
  }
}