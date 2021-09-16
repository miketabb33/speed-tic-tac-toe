import React from 'react'
import Image from 'next/image'
import styles from '../styles/Styles.module.css'
import SquareView from './square-view.js'

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
			<div className= {styles.board}>
				{ this.boardImage() }
				{ this.boardSquares() }
				{ this.boardLabel(this.props.boardTitle) }
			</div>
		)
	}

	boardImage() {
		return (
			<div className= {styles.boardImage}>
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
			<div className= {styles.boardSquares}>
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
			<div className={ styles.boardTitle }>
				{ title }
			</div>
		)
	}
}