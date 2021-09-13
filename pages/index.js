import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Styles.module.css'
import Game from '../views/game.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Speed Tic Tac Toe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Game />
      </main>
    </div>
  )
}