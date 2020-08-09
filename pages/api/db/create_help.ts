import { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../firebase-config'
import uid from 'uid'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    const {
        query: {
            user_id,
            title,
            body,
            timebox,
            fee
        }
    } = req
    const help_id = uid(20)
    let docRef = db.collection('helps').doc(help_id);
    docRef.set({
        user_id: user_id,
        title: title,
        body: body,
        timebox: Number(timebox),
        fee: Number(fee)
    }).then(_result => res.status(200).json({ help_id: help_id })).catch(err => res.status(500).json({ error: err.message }))
}

export default handler
