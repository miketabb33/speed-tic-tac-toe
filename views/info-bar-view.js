import React from 'react'
import styles from '../styles/TopBarStyles.module.css'
import TimerView from './timer-view'
import TextDisplayView from './text-display-view.js'

export default class InfoBarView extends React.Component {
  render() {
    return (
      <div className={styles.topBar}>
        <TimerView player={'X'} activePlayer={this.props.activePlayer} remainingTime = {this.props.xRemainingTime} />
        <TextDisplayView value = { this.props.textDisplay }/>
        <TimerView player={'O'} activePlayer={this.props.activePlayer} remainingTime = {this.props.oRemainingTime} />
      </div>
    )
  }
}