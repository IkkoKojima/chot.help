import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import { useState, useEffect } from 'react'
import { Tweet } from 'react-twitter-widgets'
import { Button, Icon } from 'semantic-ui-react'

type Status = {
  id_str: string
  text: string
  created_at: string
  user: {
    name: string
    screen_name: string
    profile_image_url_https: string
  }
}

const IndexPage = () => {
  const router = useRouter()
  const [tweets, setTweets] = useState<Status[]>([])

  useEffect(() => {
    async function getHashtags() {
      const url = `${window.location.origin}/api/tweet/hashtag`
      const response: Response = await fetch(url)
      if (response.ok) {
        const json = await response.json()
        const statuses = json.tweets.statuses
        setTweets(statuses)
        console.log(statuses)
      } else {
        console.log("error")
      }
    }
    getHashtags()
  }, [])

  const displayTweets = () => (
    <div>
      {tweets.map(t => <Tweet tweetId={t.id_str} options={{ lang: "ja" }} />)}
    </div>
  )

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>最近のHELP!</h1>
      <Button primary icon onClick={() => router.reload()}><Icon name="refresh" /> 更新</Button>
      {displayTweets()}
    </Layout>
  )
}

export default IndexPage
