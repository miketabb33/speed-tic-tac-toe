import React from 'react'
import styles from '../styles/Styles.module.css'

export default class TextDisplayView extends React.Component {
	static xFirst = 'X Goes First'
	static draw = 'Draw'

	static turn(player) {
		return player + "'s Turn"
	}

	static winner(player) {
		return player + ' is the Winner!'
	}

	render() {
		return (
			<div className={styles.textDisplay}>
				{ this.props.value }
			</div>
		)
	}
}