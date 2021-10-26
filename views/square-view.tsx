import React from 'react'
import Square from '../game/square'
import PlayerMarkerImage from '../images/player-marker-image'
import gameStyles from '../styles/GameStyles.module.css'

interface SquareViewProps {
	boardIndex: number
	squareIndex: number
	onClick: () => void
	square: Square
}

export default class SquareView extends React.Component<SquareViewProps, {}> {
	size = 200
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

	getContents(square: Square) {
		const imageName = this.getSquareImageName(square)
		return this.playerMarkerImage.get(imageName, this.size, this.squareID)
	}

	getSquareImageName(square: Square): string {
		const xMarker = 'x'
		const oMarker = 'o'
		var imageName = 'clear'

		if (square.marker == xMarker || square.marker == oMarker) {
			imageName = this.getPlayerMarkerImageName(square)
		}
		 
		return imageName
	}

	getPlayerMarkerImageName(square: Square): string {
		var imageName
		if (square.winningMarker) {
			imageName = 'yellow' + square.marker	
		} else {
			imageName = square.marker
		}
		return imageName!
	}
}