import React from 'react'
import BoardView from './board-view'
import gameStyles from '../styles/GameStyles.module.css'
import Square from '../game/square'

interface Board3DViewProps {
  squares: Square[][]
  onClick: (squareIndex: number, boardIndex: number) => void
}

export default class Board3DView extends React.Component<Board3DViewProps, {}> {
  renderBoard(i: number, boardTitle: string) {
    return (
    <BoardView
      squares = { this.props.squares[i] } 
      boardIndex = { i }
      boardTitle = { boardTitle }
      onClick = { (squareIndex: number, boardIndex: number) => this.props.onClick(squareIndex, boardIndex) }
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