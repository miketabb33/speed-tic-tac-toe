import React from 'react'
import PlayerMarkerImage from '../images/player-marker-image'
import topBarStyles from '../styles/TopBarStyles.module.css'

interface TimerViewProps {
  remainingTimeInHundredthsOfSeconds: number
  player: string
  activePlayer: string
}

export default class TimerView extends React.Component<TimerViewProps, {}> {
  imageSize = 25
  playerMarkerImage = new PlayerMarkerImage

  render() {
    if (this.props.remainingTimeInHundredthsOfSeconds <= 0) {
      return this.renderTimerView('red'+ this.props.player, topBarStyles.timerViewNoTimeLeft, topBarStyles.timerViewTextNoTimeLeft)
    } else {
      return this.renderTimerView(this.props.player, this.getActiveState(), this.getPlayerStyle())
    }
  }

  renderTimerView(imageName: string, viewStyle: string, textStyle: string) {
    return (
      <div className={ `${topBarStyles.timerView} ${viewStyle}` }>
        <div className={topBarStyles.timerViewImage}>
          { this.playerMarkerImage.get(imageName, this.imageSize, "timer-view") }
        </div>
        <div className={ `${topBarStyles.timerViewText} ${textStyle} `} id = { imageName + "player-remaining-time" }>
          { this.formatTime(this.props.remainingTimeInHundredthsOfSeconds) }
        </div>
      </div>
    )
  }

  getActiveState() {
    if (this.props.activePlayer == this.props.player && this.props.player == "X") {
      return topBarStyles.timerViewActiveX
    } else if (this.props.activePlayer == this.props.player && this.props.player == "O"){
      return topBarStyles.timerViewActiveO
    } else {
      return topBarStyles.timerViewInactive
    }
  }

  getPlayerStyle() {
    if (this.props.player == 'X') {
      return topBarStyles.timerViewX
    } else {
      return topBarStyles.timerViewO
    }
  }

  formatTime(timeInHundredthsOfSeconds: number) {
    if (timeInHundredthsOfSeconds <= 0) {
      return this.get0TimeFormat()
    } else {
      return this.getOver0TimeFormat(timeInHundredthsOfSeconds)
    }
  }

  addPrefixWhenNeeded(time: string) {
    if (time.length == 2) {
      return time
    } else if (time.length == 1) {
      return "0" + time
    } else if (time.length == 0) {
      return "00"
    } else {
      return '++'
    }
  }

  get0TimeFormat() {
    return '00:00.00'
  }

  getOver0TimeFormat(timeInHundredthsOfSeconds: number) {
    const stringifiedTimeInHundredthsOfSeconds = timeInHundredthsOfSeconds.toString()
    const timeRemovedHundredthsOfSeconds = parseInt(stringifiedTimeInHundredthsOfSeconds.substring(0, stringifiedTimeInHundredthsOfSeconds.length - 2))

    const minutes = Math.floor(timeRemovedHundredthsOfSeconds / 60)
    const conditionedMinutes = isNaN(minutes) ? 0 : minutes

    const conditionedSeconds = isNaN(timeRemovedHundredthsOfSeconds) ? 0 : timeRemovedHundredthsOfSeconds

    const stringifiedSeconds = (conditionedSeconds % 60).toString()
    const stringifiedMinutes = conditionedMinutes.toString()

    const conditionedHundredthsOfSeconds = stringifiedTimeInHundredthsOfSeconds.substring(stringifiedTimeInHundredthsOfSeconds.length - 2, stringifiedTimeInHundredthsOfSeconds.length)
    
    const formattedMinutes = this.addPrefixWhenNeeded(stringifiedMinutes)
    const formattedSeconds = this.addPrefixWhenNeeded(stringifiedSeconds)
    const formattedHundredthOfSeconds = this.addPrefixWhenNeeded(conditionedHundredthsOfSeconds)

    const formattedTime = `${formattedMinutes}:${formattedSeconds}.${formattedHundredthOfSeconds}`

    return formattedTime
  }
}