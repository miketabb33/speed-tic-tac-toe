import React from 'react'
import { useState, useEffect } from "react";
import styles from '../styles/Styles.module.css'

export default class TimeInputView extends React.Component {
  render() {
    return (
      <div className={ `${styles.timerInputView} ${this.shouldHide()} `}>
        <div className= {styles.timerInputText}>
          Starting Time:
        </div>
        <input
          type="text" 
          className= {styles.timerInput}
          defaultValue='10'
          maxLength="2"
          onKeyDown= { (e)=> this.validateKeyPress(e) }
          onKeyUp= { (e)=> this.didPressValidKey(e, this.props.didChangeTime) }
        />
      </div>
    )
  }

  shouldHide() {
    if (this.props.hide) {
      return styles.clear
    }
  }

  didPressValidKey(e, callback) {
    const event = e || window.event
    const input = event.target.value
    const milliseconds = input * 100
    callback(parseInt(milliseconds))
  }

  validateKeyPress(e) {
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