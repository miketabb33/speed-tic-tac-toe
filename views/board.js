import React from 'react'
import Image from 'next/image'
import styles from '../styles/Styles.module.css'
import Square from '../views/square.js'

export default class Board extends React.Component {
	size = 330

	renderSquare(marker) {
		return (
			<Square 
	      value = { marker }
	      onClick = { didClickSquare } 
	    />
		)
	}

	render() { 
		return (
			<div className= {styles.board}>
				<div className= {styles.boardImage}>
					<Image 
						src= "/board.png"
						width= {this.size}
						height= {this.size}
					/>
					</div>
				<div className= {styles.boardSquares}>
					<div>
						{this.renderSquare("x")}
						{this.renderSquare("o")}
						{this.renderSquare("x")}
					</div>
					<div>
						{this.renderSquare()}
						{this.renderSquare()}
						{this.renderSquare()}
					</div>
					<div>
						{this.renderSquare("x")}
						{this.renderSquare()}
						{this.renderSquare()}
					</div>
				</div>
			</div>
		)
	}
}

function didClickSquare() {
  console.log('hi')
}