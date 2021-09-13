import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Styles.module.css'
import Square from '../views/square.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Speed Tic Tac Toe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Square />
      </main>
    </div>
  )
}