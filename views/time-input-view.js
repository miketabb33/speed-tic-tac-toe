import React from 'react'
import styles from '../styles/Styles.module.css'

export default class TimeInputView extends React.Component {
  render() {
    return (
      <div className={ `${styles.timerInputView}`}>
        <div className= {styles.timerInputText}>
          Starting Time:
        </div>
        <input
          type="text" 
          className= {styles.timerInput}
          defaultValue='10'
          maxLength="2"
          onKeyPress= { this.didPressKey }
        />
      </div>
    )
  }

  shouldHide() {
    if (this.props.hide) {
      return styles.clear
    }
  }

  didPressKey(e) {
    const event = e || window.event
    const key = String.fromCharCode(event.keyCode || event.which)
    const regex = /[0-9]|\./
    if (regex.test(key)) {
      this.props.didChangeTime(event.value)
    } else {
      event.preventDefault()
    }
  }
}