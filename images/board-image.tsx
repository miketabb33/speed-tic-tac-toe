import Image from 'next/image'

export default class BoardImage {
  get(size: number, index: number) {
    const boardID = 'board-' + index
    return (
      <Image
        priority = { true }
        src= { `/board.png` }
        width= {size}
        height= {size}
        id = {boardID}
        alt = {boardID}
        draggable="false"
      />
    )
  }
}
