import Image from 'next/image'

export default class PlayerMarkerImage {
  get(imageName: string, size: number, location: string) {
    const imageID = imageName + '-marker-' + location
    return (
      <Image
        priority = { true }
        src= { `/player-marker/${imageName}.png` } 
        height={size}
        width={size}
        alt={ imageID }
        id={ imageID }
        draggable= "false"
      />
    )
  }
}