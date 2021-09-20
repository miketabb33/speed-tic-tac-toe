import React from 'react'
import PlayerImage from '../utils/player-image'
import gameStyles from '../styles/GameStyles.module.css'

export default class SquareView extends React.Component {
	size = 79
	playerImage = new PlayerImage

	render() { 
		return (
			<button
				className = { gameStyles.square }
				onClick = { this.props.onClick } 
			>
			{ this.getContents(this.props.value) }
     	</button>
		)
	}

	getContents(imageName) {
		if (imageName == 'X' || imageName == 'O') {
			return this.playerImage.getPlayerImage(imageName, this.size)
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