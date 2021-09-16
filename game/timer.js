export default class Timer {
  #timer
  totalTime

  constructor(didChangeTime) {
    this.totalTime = 1000
    this.usedTime = 0
    this.didChangeTime = didChangeTime
  }

  updateTime(usedTime) {
    this.usedTime = usedTime + 1
    const remainingTime = this.totalTime - usedTime
    this.didChangeTime(remainingTime)
    if (remainingTime == 0) {
      this.stopTimer()
    }
  }

  startTimer() {
    this.#timer = setInterval(() => this.updateTime(this.usedTime), 10)
  }

  stopTimer() {
    clearInterval(this.#timer)
  }
}