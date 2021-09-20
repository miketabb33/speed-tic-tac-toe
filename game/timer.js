export default class Timer {
  #timer
  totalTime
  timerDidHit0

  #decrementingMillisecondInterval = 5

  constructor(didChangeTime, timerDidHit0) {
    this.totalTime = 1000
    this.usedTime = 0
    this.timerValueDidChange = didChangeTime
    this.timerDidHit0 = timerDidHit0
  }

  updateTime(usedTime) {
    this.usedTime = usedTime + this.#decrementingMillisecondInterval
    const remainingTime = this.totalTime - usedTime
    this.timerValueDidChange(remainingTime)
    if (remainingTime <= 0) {
      this.timerDidHit0()
      this.stopTimer()
    }
  }

  startTimer() {
    const timerInterval = this.#decrementingMillisecondInterval * 10
    this.#timer = setInterval(() => this.updateTime(this.usedTime), timerInterval)
  }

  stopTimer() {
    clearInterval(this.#timer)
  }
}