export default class Square {
	marker
	indexPath //[square, board]
  winningMarker = false

  constructor(marker, indexPath) {
    this.marker = marker
    this.indexPath = indexPath
  }
}