import React from 'react'
import styles from '../styles/Styles.module.css'

export default class Display extends React.Component {
	static xFirst = 'X Goes First'
	static xTurn = this.turn("X")
	static oTurn = this.turn("O")
	static xWin = this.winner("X")
	static oWin = this.winner("O")

	static turn(player) {
		return player + "'s Turn"
	}

	static winner(player) {
		return player + ' is the Winner!'
	}

	render() {
		return (
			<div className={styles.display}>
				{ this.props.value }
			</div>
		)
	}
}