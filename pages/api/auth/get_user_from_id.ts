import { NextApiRequest, NextApiResponse } from 'next'

const admin = require('firebase-admin');

const serviceAccount = {
    type: process.env.type,
    projectId: process.env.project_id,
    privateKeyId: process.env.private_key_id,
    privateKey: process.env.private_key!.replace(/\\n/g, '\n'),
    clientEmail: process.env.client_email,
    clientId: process.env.client_id,
    authUri: process.env.auth_uri,
    tokenUri: process.env.token_uri,
    authProviderX509CertUrl: process.env.auth_provider_x509_cert_url,
    clientC509CertUrl: process.env.client_x509_cert_url
}

try {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
} catch (err) {

}

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    const {
        query: {
            uid,
        }
    } = req
    admin.auth().getUser(uid)
        .then((user: any) => {
            const uid = user.toJSON()["providerData"][0]["uid"]
            res.status(200).json({ uid: uid })
        })
        .catch((err: any) => {
            res.status(500).json({ error: err })
        })
}

export default handler
