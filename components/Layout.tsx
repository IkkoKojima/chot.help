import React, { ReactNode, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import LoginButton from '../components/LoginButton'
import firebase from '../firebase-config'
import MypageButton from '../components/MypageButton'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => {
  const [user, setUser] = useState<null | firebase.User>(null)
  firebase.auth().onAuthStateChanged(user => {
    setUser(user)
  })
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <Link href="/">
            <a>HOME</a>
          </Link>{' '}
        |{' '}
          <Link href="/help">
            <a>HELP</a>
          </Link>{' '}
        </nav>
        {user ? <MypageButton /> : <LoginButton />}
      </header>
      {children}
      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </div>)
}

export default Layout
