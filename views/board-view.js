import React from 'react'
import Image from 'next/image'
import SquareView from './square-view.js'
import gameStyles from '../styles/GameStyles.module.css'

export default class BoardView extends React.Component {
	boardImageSize = 330

	renderSquare(i) {
		return (
			<SquareView 
	      value = { this.props.moves[i] }
	      onClick = { ()=> this.props.onClick(i, this.props.boardIndex) } 
	    />
		)
	}

	render() { 
		return (
			<div className= {gameStyles.board}>
				{ this.boardImage() }
				{ this.boardSquares() }
				{ this.boardLabel(this.props.boardTitle) }
			</div>
		)
	}

	boardImage() {
		return (
			<div className= {gameStyles.boardImage}>
				<Image 
					src= "/board.png"
					width= {this.boardImageSize}
					height= {this.boardImageSize}
					draggable="false"
				/>
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