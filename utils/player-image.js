import Image from "next/image";

export default class PlayerImage {
  static get(imageName, size) {
    return (
      <Image
        priority
        src= { '/player-markers/' + imageName + '.png' } 
        height={size}
        width={size}
        alt={ imageName + ' player marker' }
        draggable="false"
      />
    )
  }
}