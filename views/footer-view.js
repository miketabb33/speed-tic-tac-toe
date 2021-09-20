import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import footerStyles from '../styles/FooterStyles.module.css'

export default class FooterView extends React.Component {

  render() {
    return (
      <div className={footerStyles.footerBar}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Lalezar&display=swap" rel="stylesheet" />
        </Head>
				<Image 
					src= "/logo.jpg"
					width= {60}
					height= {60}
					draggable="false"
				/>
        <div className={footerStyles.footerText}>
          Speed Tic Tac Toe
        </div>
			</div>
    )
  }
}