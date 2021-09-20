import Head from 'next/head'
import GameView from '../views/game-view.js'
import FooterView from '../views/footer-view.js'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Speed Tic Tac Toe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <GameView />
      </main>
      <footer>
        <FooterView />
      </footer>
    </div>
  )
}