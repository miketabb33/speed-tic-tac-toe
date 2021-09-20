import Image from 'next/image'

export default class PlayerMarkerImage {
    #imageDraggable = 'false'
  
    get(imageName, size, location) {
      const imageID = imageName.toLowerCase() + '-marker-' + location
      if (imageName == 'X') {
        return this.getX(size, imageID)
      } else if (imageName == 'O') {
        return this.getO(size, imageID)
      } else if (imageName == 'redX') {
        return this.getRedX(size, imageID)
      } else if (imageName == 'redO') {
        return this.getRedO(size, imageID)
      }
    }
  
    getX(size, imageID) {
      return (
        <Image
          src= { '/player-marker/x.png' } 
          height={size}
          width={size}
          alt={ imageID }
          id={ imageID }
          draggable= { this.#imageDraggable }
        />
      )
    }
  
    getO(size, imageID) {
      return (
        <Image
          src= { '/player-marker/o.png' } 
          height={size}
          width={size}
          alt={ imageID }
          id= { imageID }
          draggable= { this.#imageDraggable }
        />
      )
    }
  
    getRedO(size, imageID) {
      return (
        <Image
          src= { '/player-marker/redo.png' } 
          height={size}
          width={size}
          alt={ imageID }
          id= { imageID }
          draggable= { this.#imageDraggable }
        />
      )
    }
  
    getRedX(size, imageID) {
      return (
        <Image
          src= { '/player-marker/redx.png' } 
          height={size}
          width={size}
          alt={ imageID }
          id= { imageID }
          draggable= { this.#imageDraggable }
        />
      )
    }
  }
