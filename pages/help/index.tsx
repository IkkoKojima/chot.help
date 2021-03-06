import Layout from '../../components/Layout'
import LoginButton from '../../components/LoginButton'
import { useState } from 'react'
import firebase from '../../firebase-config'
import HelpForm from '../../components/HelpForm'
import { useRouter } from 'next/router'
import { Message } from 'semantic-ui-react'
import HowToUse from '../../components/HowToUse'

const AboutPage = () => {
  const [user, setUser] = useState<null | firebase.User>(null)
  const [title, setTitle] = useState<string>("")
  const [body, setBody] = useState<string>("")
  const [timebox, setTimebox] = useState<string>("60")
  const [gift, setGift] = useState<string>("tiku")
  const router = useRouter()

  async function createHelp(user_id: string, title: string, body: string, timebox: string, fee: string) {
    const url = `${window.location.origin}/api/db/create_help?user_id=${user_id}&title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}&timebox=${timebox}&fee=${fee}`
    const response: Response = await fetch(url)
    if (response.ok) {
      const json = await response.json()
      const helpId = json.help_id
      router.push(`/help/${helpId}`)
    } else {
      console.log("error")
    }
  }

  firebase.auth().onAuthStateChanged(user => {
    setUser(user)
  })

  return (
    <Layout title="Mypage | Next.js + TypeScript Example">
      <h1>HELP!ツイートをする</h1>
      {user
        ?
        <HelpForm
          title={title}
          setTitle={setTitle}
          body={body}
          setBody={setBody}
          timebox={timebox}
          setTimebox={setTimebox}
          gift={gift}
          setGift={setGift}
          handleClick={() => createHelp(user.uid, title, body, timebox, gift)}
        />
        :
        <LoginButton />
      }
      <Message>
        <HowToUse />
      </Message>
    </Layout>
  )
}

export default AboutPage
