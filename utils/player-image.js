import Image from "next/image";

export default class PlayerImage {
  #imageDraggable = 'false'

  getPlayerImage(imageName, size) {
    if (imageName == 'X') {
			return this.getX(size)
		} else if (imageName == 'O') {
			return this.getO(size)
		} else if (imageName == 'redX') {
      return this.getRedX(size)
    } else if (imageName == 'redO') {
      return this.getRedO(size)
    }
  }

  getX(size) {
    return (
      <Image
        src= { '/player-markers/x.png' } 
        height={size}
        width={size}
        alt={ 'x player marker' }
        draggable= { this.#imageDraggable }
      />
    )
  }

  getO(size) {
    return (
      <Image
        src= { '/player-markers/o.png' } 
        height={size}
        width={size}
        alt={ 'o player marker' }
        draggable= { this.#imageDraggable }
      />
    )
  }

  getRedO(size) {
    return (
      <Image
        src= { '/player-markers/redo.png' } 
        height={size}
        width={size}
        alt={ 'red o player marker' }
        draggable= { this.#imageDraggable }
      />
    )
  }

  getRedX(size) {
    return (
      <Image
        src= { '/player-markers/redX.png' } 
        height={size}
        width={size}
        alt={ 'red x player marker' }
        draggable= { this.#imageDraggable }
      />
    )
  }
}