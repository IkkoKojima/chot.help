import Layout from '../components/Layout'
import firebase from '../firebase-config'
import React, { useState, useEffect } from 'react'
import LogoutButton from '../components/LogoutButton'
import LoginButton from '../components/LoginButton'
import { Card, Image, List, Button, Icon } from 'semantic-ui-react'
import { Help } from '../domains/Help'
import Link from 'next/link'

const Mypage = () => {
    const [user, setUser] = useState<null | firebase.User>(null)
    const [myHelps, setMyHelps] = useState<Help[]>([])
    const [ids, setIds] = useState<number[]>([])
    const [applicants, setApplicants] = useState<any[]>([])

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            setUser(user)
        })
    })

    useEffect(() => {
        async function getHelpsFromUser(u: firebase.User) {
            const url = `${window.location.origin}/api/db/get_helps_from_user?user_id=${u.uid}`
            const response: Response = await fetch(url)
            if (response.ok) {
                const json = await response.json()
                setMyHelps(json.helps)
                setIds(json.ids)
            } else {
                console.log(await response.json())
            }
        }
        user ? getHelpsFromUser(user) : console.log("no user")
    }, [user])

    async function firebaseUidToTwitterUser(firebaseUid: string) {
        const url = `${window.location.origin}/api/auth/get_user_from_id?uid=${firebaseUid}`
        const response: Response = await fetch(url)
        const json = await response.json()
        const twitterUid = await json.uid

        const getTwitterIdUrl = `${window.location.origin}/api/twitter/get_user_from_uid?uid=${twitterUid}`
        const getTwitterIdResponse: Response = await fetch(getTwitterIdUrl)
        const getTwitterIdJson = await getTwitterIdResponse.json()
        return await getTwitterIdJson.user
    }

    useEffect(() => {
        async function getUserFromId(helps: Help[]) {
            return await Promise.all(helps.map(async h => Promise.all(h.applicant.map(async firebaseUid => await firebaseUidToTwitterUser(firebaseUid)))))
        }
        getUserFromId(myHelps)
            .then(applicants => {
                console.log(applicants)
                setApplicants(applicants)
            })
            .catch(err => {
                throw err
            })
    }, [myHelps])

    return (
        <Layout title="Mypage | Next.js + TypeScript Example">
            <h1>ここはマイページです</h1>
            {user
                ?
                <React.Fragment>
                    <Card>
                        <Image src={user.photoURL!.replace("_normal", "")} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>
                                {user.displayName}
                            </Card.Header>
                        </Card.Content>
                    </Card>
                    <List>
                        {myHelps.map((h: Help, index: number) => {
                            return (
                                <List.Item>

                                    <Card>
                                        <Link href={`/help/${ids[index]}`}>
                                            <Image src={`https://res.cloudinary.com/chot-help/image/upload/l_text:notosansjp-bold.otf_70_bold:${h.title}%0A報酬%3A%C2%A5${h.fee}%0A時間枠%3A${h.timebox}分,co_rgb:FFFFFF,w_800,c_fit/v1597382728/chothelp_ogp_bg.png`} />
                                        </Link>
                                        <Card.Content>
                                            <Card.Description>
                                                応募者
                                                <List>
                                                    {applicants[index] ? applicants[index].map((a: any) => {
                                                        return (
                                                            // TODO List.Item をchot.helpアカウントのプロフィールへのリンクにする
                                                            <List.Item>
                                                                <Image avatar src={a.profile_image_url_https} />
                                                                <List.Content>
                                                                    <List.Header>{a.name}</List.Header>
                                                                    <List.Description>@{a.screen_name}</List.Description>
                                                                </List.Content>
                                                                <Button icon><a target="_blank" rel="noreferrer noopener" href={`https://twitter.com/${a.screen_name}`}><Icon name="twitter" /></a></Button>
                                                                {/* TODO このボタンクリックで、応募者を承認し、セッションを始めることができるようにする */}
                                                                <Button primary>この人に頼む</Button>
                                                            </List.Item>
                                                        )
                                                    })
                                                        :
                                                        ""
                                                    }
                                                </List>
                                            </Card.Description>
                                        </Card.Content>
                                    </Card>
                                </List.Item>
                            )
                        })}
                    </List>
                </React.Fragment>
                :
                <React.Fragment />
            }
            {user ? <LogoutButton /> : <LoginButton />}
        </Layout>
    )
}

export default Mypage