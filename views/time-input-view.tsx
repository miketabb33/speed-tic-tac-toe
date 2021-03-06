import React from 'react'
import gameStyles from '../styles/GameStyles.module.css'

interface TimeInputViewProps {
  hide: boolean
  didChangeTime: (time: number) => void
}

export default class TimeInputView extends React.Component<TimeInputViewProps, {}> {
  render() {
    return (
      <div 
        className={ `${gameStyles.timeInputView} ${this.shouldHide()} `}
        id = { 'time-input-view' }
      >
        <div className= {gameStyles.timeInputText}>
          Starting Time:
        </div>
        <input
          type="text" 
          className= {gameStyles.timeInput}
          defaultValue='10'
          maxLength={5}
          onKeyDown= { (e)=> this.validateKeyPress(e) }
          onKeyUp= { (e)=> this.didPressValidKey(e, this.props.didChangeTime) }
          id = { 'time-input' }
        />
      </div>
    )
  }

  shouldHide() {
    if (this.props.hide) {
      return gameStyles.clear
    }
  }

  didPressValidKey(e: any, callback: (time: number) => void) {
    const event = e || window.event
    const input = event.target.value
    const milliseconds = input * 100
    callback(milliseconds)
  }

  validateKeyPress(e: any) {
    const event = e || window.event
    const keyCode = event.keyCode
    const key = String.fromCharCode(keyCode || event.which)
    const regex = new RegExp("^[0-9,\b]*$")
    const validRegex = regex.test(key)
    const arrowKey = (keyCode == 37 || keyCode == 38 || keyCode == 39 || keyCode == 40)
    if (!validRegex && !arrowKey) {
      event.preventDefault()
    }
  }
}