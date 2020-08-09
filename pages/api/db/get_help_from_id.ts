import { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../firebase-config'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    const { query: { id } } = req
    let helpRef = db.collection('helps').doc(id as string);
    let getDoc = helpRef.get()
        .then(doc => {
            if (!doc.exists) {
                console.log('No such document!');
                res.status(200).json({
                    data: {
                        user_id: "",
                        title: "",
                        body: "",
                        timebox: 0,
                        fee: 0
                    }
                })
            } else {
                res.status(200).json({ data: doc.data() })
            }
        })
        .catch(err => {
            console.log('Error getting document', err);
        });
}

export default handler
