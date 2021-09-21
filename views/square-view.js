import React from 'react'
import PlayerMarkerImage from '../images/player-marker-image'
import gameStyles from '../styles/GameStyles.module.css'

export default class SquareView extends React.Component {
	size = 79
	playerMarkerImage = new PlayerMarkerImage
	squareID = 'board-' + (this.props.boardIndex + 1) + '-square-' + (this.props.squareIndex + 1)

	render() { 
		return (
			<button
				className = { gameStyles.square }
				onClick = { this.props.onClick }
				id = { this.squareID }
			>
			{ this.getContents(this.props.square) }
     	</button>
		)
	}

	getContents(square) {
		if (square.marker == 'X' && square.winningMarker || square.marker == 'O' && square.winningMarker) {
			const winningName = 'yellow' + square.marker
			return this.playerMarkerImage.get(winningName, this.size, this.squareID)
		} else if (square.marker == 'X' || square.marker == 'O') {
			return this.playerMarkerImage.get(square.marker, this.size, this.squareID)
		} else {
   		return this.getBlankSpace()
   	}
	}

	getBlankSpace() {
		return (
   		<svg width={this.size} height={this.size}>
			  <rect width={this.size} height={this.size} className={gameStyles.clear}/>
			</svg>
 		)
	}
}