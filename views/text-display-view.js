import React from 'react'
import topBarStyles from '../styles/TopBarStyles.module.css'

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
			<div 
				className={topBarStyles.textDisplay}
				id = { 'text-display-view' }
			>
				{ this.props.value }
			</div>
		)
	}
}