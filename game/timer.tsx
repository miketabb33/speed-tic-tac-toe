export default class PlayerTimer {
  #timer: number
  #usedTimeInHundredthsOfSeconds: number
  #totalTimeInHundredthsOfSeconds: number

  timerDidHit0
  timerValueDidChange

  #decrementingMillisecondInterval = 5

  constructor(didChangeTime: (time: number) => void, timerDidHit0: () => void) {
    this.#totalTimeInHundredthsOfSeconds = 1000 // = 10 seconds
    this.#usedTimeInHundredthsOfSeconds = 0
    this.timerValueDidChange = didChangeTime
    this.timerDidHit0 = timerDidHit0
    this.#timer = 0
  }

  updateTime(usedTimeInHundredthsOfSeconds: number) {
    this.#usedTimeInHundredthsOfSeconds = usedTimeInHundredthsOfSeconds + this.#decrementingMillisecondInterval
    const remainingTimeInHundredthsOfSeconds = this.#totalTimeInHundredthsOfSeconds - usedTimeInHundredthsOfSeconds
    this.timerValueDidChange(remainingTimeInHundredthsOfSeconds)
    if (remainingTimeInHundredthsOfSeconds <= 0) {
      this.timerDidHit0()
      this.stopTimer()
    }
  }

  startTimer() {
    const timerInterval = this.#decrementingMillisecondInterval * 10
    this.#timer = window.setInterval(() => this.updateTime(this.#usedTimeInHundredthsOfSeconds), timerInterval)
  }

  stopTimer() {
    clearInterval(this.#timer)
  }

  setTotalTime(timeInHundredthsOfSeconds: number) {
    this.#totalTimeInHundredthsOfSeconds = timeInHundredthsOfSeconds
  }
}