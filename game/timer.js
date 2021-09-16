export default class Timer {
  #timer
  totalTime
  timerDidHit0

  constructor(didChangeTime, timerDidHit0) {
    this.totalTime = 1000
    this.usedTime = 0
    this.timerValueDidChange = didChangeTime
    this.timerDidHit0 = timerDidHit0
  }

  updateTime(usedTime) {
    this.usedTime = usedTime + 1
    const remainingTime = this.totalTime - usedTime
    this.timerValueDidChange(remainingTime)
    if (remainingTime == 0) {
      this.timerDidHit0()
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