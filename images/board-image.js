import Image from 'next/image'

export default class BoardImage {
  get(size, index) {
    const boardID = 'board-' + index
    return (
      <Image
        priority 
        src= "/board.png"
        width= {size}
        height= {size}
        id = {boardID}
        alt = {boardID}
        draggable="false"
      />
    )
  }
}
