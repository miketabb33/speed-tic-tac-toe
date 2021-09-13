import React from 'react'
import Image from 'next/image'
import styles from '../styles/Styles.module.css'
import Square from '../views/square.js'

export default class Board extends React.Component {
	size = 330

	renderSquare(i) {
		return (
			<Square 
	      value = { this.props.moves[i] }
	      onClick = { ()=> this.props.onClick(i) } 
	    />
		)
	}

	render() { 
		return (
			<div className= {styles.board}>
				{ this.boardImage() }
				{ this.boardSquares() }
			</div>
		)
	}

	boardImage() {
		return (
			<div className= {styles.boardImage}>
				<Image 
					src= "/board.png"
					width= {this.size}
					height= {this.size}
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
}