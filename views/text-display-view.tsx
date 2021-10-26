import React from 'react'
import topBarStyles from '../styles/TopBarStyles.module.css'

interface TextDisplayViewProps {
	value: string
}

export default class TextDisplayView extends React.Component<TextDisplayViewProps, {}> {
	static xFirst = 'X Goes First'
	static draw = 'Draw'

	static turn(player: string) {
		return player.toUpperCase() + "'s Turn"
	}

	static winner(player: string) {
		return player.toUpperCase() + ' is the Winner!'
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