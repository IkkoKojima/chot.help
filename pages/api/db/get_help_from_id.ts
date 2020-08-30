import { NextApiRequest, NextApiResponse } from 'next'

const admin = require('firebase-admin');

const serviceAccount = {
    type: process.env.type,
    project_id: process.env.project_id,
    private_key_id: process.env.private_key_id,
    private_key: process.env.private_key!.replace(/\\n/g, '\n'),
    client_email: process.env.client_email,
    client_id: process.env.client_id,
    auth_uri: process.env.auth_uri,
    token_uri: process.env.token_uri,
    auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url,
    client_x509_cert_url: process.env.client_x509_cert_url
}

console.log(serviceAccount)

try {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
} catch (err) {

}

let db = admin.firestore();

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    const { query: { id } } = req
    let helpRef = db.collection('helps').doc(id as string);
    helpRef.get()
        .then((doc: any) => {
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
        .catch((err: any) => {
            console.log('Error getting document', err);
        });
}

export default handler