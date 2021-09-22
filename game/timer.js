export default class Timer {
  #timer
  timerDidHit0

  #decrementingMillisecondInterval = 5

  constructor(didChangeTime, timerDidHit0) {
    this.totalTimeInHundredthsOfSeconds = 1000 // = 10 seconds
    this.usedTimeInHundredthsOfSeconds = 0
    this.timerValueDidChange = didChangeTime
    this.timerDidHit0 = timerDidHit0
  }

  updateTime(usedTimeInHundredthsOfSeconds) {
    this.usedTime = usedTimeInHundredthsOfSeconds + this.#decrementingMillisecondInterval
    const remainingTimeInHundredthsOfSeconds = this.totalTimeInHundredthsOfSeconds - usedTimeInHundredthsOfSeconds
    this.timerValueDidChange(remainingTimeInHundredthsOfSeconds)
    if (remainingTimeInHundredthsOfSeconds <= 0) {
      this.timerDidHit0()
      this.stopTimer()
    }
  }

  startTimer() {
    const timerInterval = this.#decrementingMillisecondInterval * 10
    this.#timer = setInterval(() => this.updateTime(this.usedTimeInHundredthsOfSeconds), timerInterval)
  }

  stopTimer() {
    clearInterval(this.#timer)
  }
}