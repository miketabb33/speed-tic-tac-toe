import React from 'react'
import TimerView from './timer-view'
import TextDisplayView from './text-display-view.js'
import topBarStyles from '../styles/TopBarStyles.module.css'

export default class InfoBarView extends React.Component {
  render() {
    return (
      <div className={topBarStyles.topBar}>
        <TimerView player={'X'} activePlayer={this.props.activePlayer} remainingTimeInHundredthsOfSeconds = {this.props.xRemainingTimeInHundredthsOfSeconds} />
        <TextDisplayView value = { this.props.textDisplay }/>
        <TimerView player={'O'} activePlayer={this.props.activePlayer} remainingTimeInHundredthsOfSeconds = {this.props.oRemainingTimeInHundredthsOfSeconds} />
      </div>
    )
  }
}