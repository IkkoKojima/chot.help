import Layout from '../../components/Layout'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { Image, Segment } from 'semantic-ui-react'
import ApplicationButton from '../../components/ApplicationButton'
import firebase from '../../firebase-config'
import { useState } from 'react'

import Head from 'next/head'

const HelpPage = (
    {
        id,
        user_id,
        title,
        body,
        image_url
    }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const [user, setUser] = useState<null | firebase.User>(null)

    firebase.auth().onAuthStateChanged(user => {
        setUser(user)
    })

    const application = async () => {
        if (user) {
            const url = `${window.location.origin}/api/db/application_help?user_id=${user.uid}&help_id=${id}`
            const response: Response = await fetch(url)
            if (response.ok) {
                console.log("success")
            } else {
                console.log("error")
            }
        }
    }

    return (
        user_id !== "" ?
            <Layout title="Mypage | Next.js + TypeScript Example">
                <Head>
                    <title>{title} | chot.help</title>
                    <meta content="IE=edge" http-equiv="X-UA-Compatible" />
                    <meta content="width=device-width, initial-scale=1.0, user-scalable=no" name="viewport" />
                    <meta name="description" content={body} />
                    {/* <meta property="og:url" content={`${window.location.origin}/help/${id}`} /> */}
                    <meta property="og:title" content={title} />
                    <meta property="og:description" content={body} />
                    <meta property="og:image" content={image_url} />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="ja_JP" />
                    <meta property="fb:app_id" content="584344385566686" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:site" content="@IkkoKojima" />
                    <meta name="twitter:description" content={body} />
                    <meta name="twitter:image" content={image_url} />
                    <meta name="note:card" content="summary_large_image" />
                    <meta content="telephone=no" name="format-detection" />
                </Head>
                <Image src={image_url} centered />
                <Segment>{body}</Segment>
                <ApplicationButton disabled={user ? user_id === user.uid : false} handleClick={application} />
            </Layout>
            :
            <Layout title="そのページは存在しません | Next.js + TypeScript Example">
                <h1>そのページは存在しません</h1>
            </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const id = query.id
    const url = `${process.env.NODE_ENV === 'production' ? "https://chot.help" : process.env.VERCEL_URL}/api/db/get_help_from_id?id=${id}`
    const response = await fetch(url)
    const json = await response.json()

    // size : 943 x 495
    const image_url = `https://res.cloudinary.com/chot-help/image/upload/l_text:notosansjp-bold.otf_70_bold:${json.data.title}%0A報酬%3A%C2%A5${json.data.fee}%0A時間枠%3A${json.data.timebox}分,co_rgb:FFFFFF,w_800,c_fit/v1597382728/chothelp_ogp_bg.png`

    return {
        props: {
            id,
            user_id: json.data.user_id,
            title: json.data.title,
            body: json.data.body,
            timebox: json.data.timebox,
            fee: json.data.fee,
            image_url: image_url
        },
    }
}

export default HelpPage
