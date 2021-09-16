import React from 'react'
import styles from '../styles/Styles.module.css'
import PlayerImage from '../utils/player-image'

export default class SquareView extends React.Component {
	size = 79

	render() { 
		return (
			<button
				className = { styles.square }
				onClick = { this.props.onClick } 
			>
			{ this.getContents(this.props.value) }
     	</button>
		)
	}

	getContents(imageName) {
		if (imageName == 'X' || imageName == 'O') {
			return this.getMarkerImage(imageName)
   	} else {
   		return this.getBlankSpace()
   	}
	}

	getMarkerImage(imageName) {
		return (
			PlayerImage.get(imageName, this.size)
 		)
	}

	getBlankSpace() {
		return (
   		<svg width={this.size} height={this.size}>
			  <rect width={this.size} height={this.size} className={styles.clear}/>
			</svg>
 		)
	}
}