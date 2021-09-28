import Image from 'next/image'

export default class PlayerMarkerImage {
    #imageDraggable = false
  
    get(imageName: string, size: number, location: string) {
      const imageID = imageName.toLowerCase() + '-marker-' + location
      if (imageName == 'X') {
        return this.getX(size, imageID)
      } else if (imageName == 'O') {
        return this.getO(size, imageID)
      } else if (imageName == 'redX') {
        return this.getRedX(size, imageID)
      } else if (imageName == 'redO') {
        return this.getRedO(size, imageID)
      } else if (imageName == 'yellowX') {
        return this.getYellowX(size, imageID)
      } else if (imageName == 'yellowO') {
        return this.getYellowO(size, imageID)
      }
    }
  
    getX(size: number, imageID: string) {
      return (
        <Image
          priority
          src= { '/player-marker/x.png' } 
          height={size}
          width={size}
          alt={ imageID }
          id={ imageID }
          draggable= { this.#imageDraggable }
        />
      )
    }
  
    getO(size: number, imageID: string)  {
      return (
        <Image
          priority  
          src= { '/player-marker/o.png' } 
          height={size}
          width={size}
          alt={ imageID }
          id= { imageID }
          draggable= { this.#imageDraggable }
        />
      )
    }
  
    getRedO(size: number, imageID: string)  {
      return (
        <Image
          priority
          src= { '/player-marker/redo.png' } 
          height={size}
          width={size}
          alt={ imageID }
          id= { imageID }
          draggable= { this.#imageDraggable }
        />
      )
    }
  
    getRedX(size: number, imageID: string)  {
      return (
        <Image
          priority
          src= { '/player-marker/redx.png' } 
          height={size}
          width={size}
          alt={ imageID }
          id= { imageID }
          draggable= { this.#imageDraggable }
        />
      )
    }

    getYellowX(size: number, imageID: string)  {
      return (
        <Image
          priority
          src= { '/player-marker/yellowx.png' } 
          height={size}
          width={size}
          alt={ imageID }
          id= { imageID }
          draggable= { this.#imageDraggable }
        />
      )
    }

    getYellowO(size: number, imageID: string)  {
      return (
        <Image
          priority
          src= { '/player-marker/yellowo.png' } 
          height={size}
          width={size}
          alt={ imageID }
          id= { imageID }
          draggable= { this.#imageDraggable }
        />
      )
    }
  }
