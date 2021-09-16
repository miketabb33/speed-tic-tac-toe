import React from 'react'
import styles from '../styles/TopBarStyles.module.css'
import PlayerImage from '../utils/player-image'

export default class TimerView extends React.Component {
  imageSize = 25

  render() {
    if (this.props.remainingTime == 0) {
      return this.renderTimerView('red'+ this.props.player, styles.timerViewNoTimeLeft, styles.timerViewTextNoTimeLeft)
    } else {
      return this.renderTimerView(this.props.player, this.getActiveState(), this.getPlayerStyle())
    }
  }

  renderTimerView(imageName, viewStyle, textStyle) {
    return (
      <div className={ `${styles.timerView} ${viewStyle}` }>
        <div className={styles.timerViewImage}>
          {PlayerImage.get(imageName, this.imageSize)}
        </div>
        <div className={ `${styles.timerViewText} ${textStyle} `}>
          { this.formatTime(this.props.remainingTime) }
        </div>
      </div>
    )
  }

  getActiveState() {
    if (this.props.activePlayer == this.props.player && this.props.player == "X") {
      return styles.timerViewActiveX
    } else if (this.props.activePlayer == this.props.player && this.props.player == "O"){
      return styles.timerViewActiveO
    } else {
      return styles.timerViewInactive
    }
  }

  getPlayerStyle() {
    if (this.props.player == 'X') {
      return styles.timerViewX
    } else if (this.props.player == 'O'){
      return styles.timerViewO
    }
  }

  formatTime(time) {
    const s = time.toString()
    const milliseconds = s.substring(s.length-2, s.length)
    const seconds = s.substring(0, s.length-2)

    const prefixedMilliseconds = this.addPrefixWhenNeeded(milliseconds)
    const prefixSeconds = this.addPrefixWhenNeeded(seconds)
    
    return prefixSeconds + ':' + prefixedMilliseconds
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
}