import React from 'react'
import SquareView from './square-view.js'
import BoardImage from '../images/board-image.js'
import gameStyles from '../styles/GameStyles.module.css'

export default class BoardView extends React.Component {
	boardImageSize = 330
	boardImage = new BoardImage

	renderSquare(i) {
		return (
			<SquareView 
	      marker = { this.props.squares[i].marker }
				boardIndex = { this.props.boardIndex }
				squareIndex = { i }
	      onClick = { ()=> this.props.onClick(i, this.props.boardIndex) } 
	    />
		)
	}

	render() { 
		return (
			<div className= {gameStyles.board}>
				{ this.boardImageView() }
				{ this.boardSquares() }
				{ this.boardLabel(this.props.boardTitle) }
			</div>
		)
	}

	boardImageView() {
		return (
			<div className= {gameStyles.boardImage}>
				{ this.boardImage.get(this.boardImageSize, this.props.boardIndex) }
			</div>
		)
	}

	boardSquares() {
		return (
			<div className= {gameStyles.boardSquares}>
				<div>
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div>
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div>
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</div>
		)
	}

	boardLabel(title) {
		return (
			<div className={ gameStyles.boardTitle }>
				{ title }
			</div>
		)
	}
}