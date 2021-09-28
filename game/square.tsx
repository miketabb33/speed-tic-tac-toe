export default class Square {
	marker
	indexPath //[square, board]
  winningMarker = false

  constructor(marker: string | null, indexPath: number[]) {
    this.marker = marker
    this.indexPath = indexPath
  }
}