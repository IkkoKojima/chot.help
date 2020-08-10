import Layout from '../../components/Layout'
import LoginButton from '../../components/LoginButton'
import { useState } from 'react'
import firebase from '../../firebase-config'
import HelpForm from '../../components/HelpForm'
import { useRouter } from 'next/router'
import { Message } from 'semantic-ui-react'

const AboutPage = () => {
  const [user, setUser] = useState<null | firebase.User>(null)
  const [title, setTitle] = useState<string>("")
  const [body, setBody] = useState<string>("")
  const [timebox, setTimebox] = useState<string>("30")
  const [fee, setFee] = useState<string>("1000")
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
          fee={fee}
          setFee={setFee}
          handleClick={() => createHelp(user.uid, title, body, timebox, fee)}
        />
        :
        <LoginButton />
      }
      <Message>
        <Message.Header>HELP!ツイートした後の流れ</Message.Header>
        <Message.List>
          <Message.Item>あなたのツイートを見て、興味のあるメンターが申し込みをします</Message.Item>
          <Message.Item>あなたが申し込みの中から1人を選択すると、マッチングが成立します</Message.Item>
          <Message.Item>マッチング成立時に、chot.helpが一時的にあなたから料金をお預かりします</Message.Item>
          <Message.Item>マッチング成立後は、問題をメンターと解決していきましょう</Message.Item>
          <Message.Item>設定した時間が経過した後は、お互いを評価してください</Message.Item>
          <Message.Item>お預かりした料金から手数料を差し引いた金額がメンターに支払われます</Message.Item>
        </Message.List>
        <br />
                ※ トラブルやイタズラなど、メンターが仕事を放棄したことが確認できた場合、料金は払い戻しいたします
            </Message>
    </Layout>
  )
}

export default AboutPage
