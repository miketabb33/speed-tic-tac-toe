import React from 'react'
import styles from '../styles/Styles.module.css'

export default class TimerView extends React.Component {
  render() {
    return (
      <div className={styles.timerView}>
        X 10:00
      </div>
    )
  }
}