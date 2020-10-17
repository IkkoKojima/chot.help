import React, { ReactNode, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import firebase from '../firebase-config'
import { Icon, Menu } from 'semantic-ui-react'
import { handleLogin } from '../firebase-config'
import { useRouter } from 'next/router'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => {
  const [user, setUser] = useState<null | firebase.User>(null)
  firebase.auth().onAuthStateChanged(user => {
    setUser(user)
  })

  const router = useRouter()
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Menu stackable>
        <Menu.Item
          name="home"
          onClick={() => router.push("/")}
          style={{ padding: "0 1rem 0 1rem" }}
        >
          <Link href="/">
            <img src="/logo.svg" style={{ width: "130px", minHeight: "60px" }} />
          </Link>
        </Menu.Item>

        <Menu.Item
          name="help"
          onClick={() => router.push("/help")}
        >
          <Icon name="comment" />
          <p>HELP!する</p>
        </Menu.Item>
        {user
          ?
          <Menu.Item
            name="mypage"
            onClick={() => router.push("/mypage")}
            position="right"
          >
            <Icon name="user" />
            <p>マイページ</p>
          </Menu.Item>
          :
          <Menu.Item
            name="mypage"
            onClick={handleLogin}
            position="right"
          >
            <Icon name="sign-in" />
            <p>ログイン</p>
          </Menu.Item>
        }
      </Menu>
      {children}
      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </div>)
}

export default Layout
