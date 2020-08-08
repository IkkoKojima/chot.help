import Layout from '../components/Layout'
import LoginButton from '../components/LoginButton'
import { useState } from 'react'
import firebase from '../firebase-config'
import HelpForm from '../components/HelpForm'

const AboutPage = () => {
  const [user, setUser] = useState<null | firebase.User>(null)
  firebase.auth().onAuthStateChanged(user => {
    setUser(user)
  })
  return (
    <Layout title="Mypage | Next.js + TypeScript Example">
      <h1>HELP!ツイートをする</h1>
      {user
        ?
        <HelpForm />
        :
        <LoginButton />
      }
    </Layout>
  )
}

export default AboutPage
