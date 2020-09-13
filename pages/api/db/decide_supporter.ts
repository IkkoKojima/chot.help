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

let db = admin.firestore();

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    const {
        query: {
            supporter_id,
            help_id
        }
    } = req
    console.log(supporter_id, help_id)
    let docRef = db.collection('helps').doc(help_id);
    docRef.update({
        supporter_id: supporter_id
    })
        .then((_result: any) => res.status(200))
        .catch((err: any) => res.status(500).json({ error: err.message }))
}

export default handler
