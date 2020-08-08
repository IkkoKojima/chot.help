import Layout from '../components/Layout'
import firebase from '../firebase-config'
import { useState } from 'react'
import LogoutButton from '../components/LogoutButton'
import LoginButton from '../components/LoginButton'
import { Card, Image } from 'semantic-ui-react'

const Mypage = () => {
    const [user, setUser] = useState<null | firebase.User>(null)
    firebase.auth().onAuthStateChanged(user => {
        setUser(user)
    })
    return (
        <Layout title="Mypage | Next.js + TypeScript Example">
            <h1>Mypage</h1>
            {user
                ?
                <div>
                    <Card>
                        <Image src={user.photoURL!.replace("_normal", "")} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>
                                {user.displayName}
                            </Card.Header>
                        </Card.Content>
                    </Card>
                </div>
                :
                <div />
            }
            {user ? <LogoutButton /> : <LoginButton />}
        </Layout>
    )
}

export default Mypage