import React from "react";
import BoardView from "./board-view";
import styles from '../styles/Styles.module.css'

export default class BoardsView extends React.Component {
  renderBoard(i, boardTitle) {
    return (
    <BoardView
      moves = { this.props.moves[i] } 
      boardIndex = { i }
      boardTitle = { boardTitle }
      onClick = { (squareIndex, boardIndex) => this.props.onClick(squareIndex, boardIndex) }
    />
    )
  }

  render() {
    return (
      <div className={ styles.boards }>
        { this.renderBoard(0, 'Top') }
        { this.renderBoard(1, 'Middle') }
        { this.renderBoard(2, 'Bottom') }
        </div>
    )
  }
}