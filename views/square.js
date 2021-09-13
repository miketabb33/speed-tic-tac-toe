import React from 'react'
import Image from 'next/image'
import styles from '../styles/Styles.module.css'

export default class Square extends React.Component {
	size = 100

	render() { 
		return (
			<button
				className = { styles.square }
				onClick = { didClickSquare } 
			>
			{ this.getContents(this.props.value) }
     	</button>
		)
	}

	getContents(imageName) {
		if (imageName == 'x' || imageName == 'o') {
			return this.getMarkerImage(imageName)
   	} else {
   		return this.getBlankSpace()
   	}
	}

	getMarkerImage(imageName) {
		return (
			<Image
	      priority
	      src= { '/player-markers/' + imageName + '.png' } 
	      height={this.size}
	      width={this.size}
	      alt={ imageName + ' player marker' }
	      draggable="false"
	   	/>
 		)
	}

	getBlankSpace() {
		return (
   		<svg width={this.size} height={this.size}>
			  <rect width={this.size} height={this.size} className={styles.blank}/>
			</svg>
 		)
	}
}

function didClickSquare() {
  console.log('hi')
}