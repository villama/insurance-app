import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Fragment, useEffect } from 'react'
import Header from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  // Hardcode a userId for demo purposes
  useEffect(() => {
    localStorage.setItem('userId', '1')
  })

  return (
    <Fragment>
      <Header />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
