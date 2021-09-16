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
          onKeyDown= { (e)=> this.didPressKey(e, this.props.didChangeTime) }
        />
      </div>
    )
  }

  shouldHide() {
    if (this.props.hide) {
      return styles.clear
    }
  }

  didPressKey(e, callback) {
    const event = e || window.event
    const key = String.fromCharCode(event.keyCode || event.which)
    const regex = new RegExp("^[0-9,\b][0-9,\b]*$");
    if (regex.test(key)) {
      let value = (event.target.value + key).substring(0,2) + "00"
      callback(parseInt(value))
    } else {
      event.preventDefault()
    }
  }
}