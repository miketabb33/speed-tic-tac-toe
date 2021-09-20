import React from 'react'
import PlayerMarkerImage from '../images/player-marker-image'
import topBarStyles from '../styles/TopBarStyles.module.css'

export default class TimerView extends React.Component {
  imageSize = 25
  playerMarkerImage = new PlayerMarkerImage

  render() {
    if (this.props.remainingTime <= 0) {
      return this.renderTimerView('red'+ this.props.player, topBarStyles.timerViewNoTimeLeft, topBarStyles.timerViewTextNoTimeLeft)
    } else {
      return this.renderTimerView(this.props.player, this.getActiveState(), this.getPlayerStyle())
    }
  }

  renderTimerView(imageName, viewStyle, textStyle) {
    return (
      <div className={ `${topBarStyles.timerView} ${viewStyle}` }>
        <div className={topBarStyles.timerViewImage}>
          { this.playerMarkerImage.get(imageName, this.imageSize, "timer-view") }
        </div>
        <div className={ `${topBarStyles.timerViewText} ${textStyle} `}>
          { this.formatTime(this.props.remainingTime) }
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
    } else if (this.props.player == 'O'){
      return topBarStyles.timerViewO
    }
  }

  formatTime(time) {
    if (time <= 0) {
      return this.get0TimeFormat()
    } else {
      return this.getOver0TimeFormat(time)
    }
  }

  addPrefixWhenNeeded(time) {
    if (time.length == 2) {
      return time
    } if (time.length == 1) {
      return "0" + time
    } else if (time.length == 0) {
      return "00"
    }
  }

  get0TimeFormat() {
    return '00:00'
  }

  getOver0TimeFormat(time) {
    const s = time.toString()
    const milliseconds = s.substring(s.length-2, s.length)
    const seconds = s.substring(0, s.length-2)

    const prefixedMilliseconds = this.addPrefixWhenNeeded(milliseconds)
    const prefixSeconds = this.addPrefixWhenNeeded(seconds)
    
    return prefixSeconds + ':' + prefixedMilliseconds
  }
}