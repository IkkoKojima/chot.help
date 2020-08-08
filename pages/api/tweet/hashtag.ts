import { NextApiRequest, NextApiResponse } from 'next'

const Twitter = require('twitter')

const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
    async function search() {
        // reference : https://developer.twitter.com/en/docs/tweets/search/api-reference/get-search-tweets
        const tweets = await client.get('search/tweets', { q: "#LoR -RT", count: 10, result_type: "recent" })
        return tweets
    }
    search()
        .then(r => res.status(200).json({ tweets: r }))
        .catch(e => console.log(e))
}

export default handler
