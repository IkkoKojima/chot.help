import { NextApiRequest, NextApiResponse } from 'next'

const Twitter = require('twitter')

const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    const {
        query: {
            uid,
        }
    } = req
    async function getUserFromUid(id: string) {
        const users = await client.get('users/show', { user_id: id })
        return users
    }
    getUserFromUid(uid as string)
        .then(r => res.status(200).json({ user: r }))
        .catch(e => console.log(e))
}

export default handler
