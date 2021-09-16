import React from 'react'
import styles from '../styles/Styles.module.css'
import TimerView from './timer-view'
import TextDisplayView from './text-display-view.js'

export default class InfoBarView extends React.Component {
  render() {
    return (
      <div class={styles.topBar}>
        <TimerView />
        <TextDisplayView value = { this.props.textDisplay }/>
        <TimerView />
      </div>
    )
  }
}