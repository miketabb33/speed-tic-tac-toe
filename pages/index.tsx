import Head from 'next/head'
import GameView from '../views/game-view'
import FooterView from '../views/footer-view'

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