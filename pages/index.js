import Head from 'next/head'
import styles from '../styles/Styles.module.css'
import GameView from '../views/game-view.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Speed Tic Tac Toe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <GameView />
      </main>
    </div>
  )
}