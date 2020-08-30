import React, { useState } from 'react';
import { Button, Modal, Image, Header, Message } from 'semantic-ui-react'
import firebase from 'firebase';
import LoginButton from './LoginButton';

type Props = {
    twitterUser: any
    timebox: number
    fee: number
    handleClick: () => void
    disabled?: boolean
}

const ReceivingButton = (props: Props) => {
    const [open, setOpen] = useState<boolean>(false)
    const [user, setUser] = useState<null | firebase.User>(null)
    const [done, setDone] = useState<boolean>(false)

    firebase.auth().onAuthStateChanged(user => {
        setUser(user)
    })

    return (
        <React.Fragment>
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Button disabled={props.disabled} primary>この人に頼む</Button>}
            >
                <Modal.Header>サポーターを選んでマッチングする</Modal.Header>
                <Modal.Content image>
                    {user
                        ?
                        <React.Fragment>
                            <Image size='medium' src={props.twitterUser.profile_image_url_https.replace("_normal", "")} wrapped />
                            <Modal.Description>
                                <Header><big>¥{props.fee} / {props.timebox}分</big>で<br /><big>{props.twitterUser.name}</big> さんを<br />サポーターに選びます</Header>
                                <Message>
                                    <Message.Header>マッチング後の流れ</Message.Header>
                                    <Message.List>
                                        <Message.Item>マッチング成立時に、chot.helpが一時的にあなたから料金をお預かりします</Message.Item>
                                        <Message.Item>トラブルがあった場合は全額返金します</Message.Item>
                                        <Message.Item>マッチング成立後は、サポーターと一緒に問題を解決していきましょう</Message.Item>
                                        <Message.Item>設定された時間が経過した後は、お互いを評価してください</Message.Item>
                                        <Message.Item>お預かりした料金から手数料を差し引いた金額がサポーターに支払われます</Message.Item>
                                    </Message.List>
                                </Message>
                            </Modal.Description>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <Modal.Description>
                                <Header>おっと、ログインがまだです</Header>
                                <LoginButton />
                            </Modal.Description>
                        </React.Fragment>
                    }
                </Modal.Content>
                <Modal.Actions>
                    <Button color='black' onClick={() => setOpen(false)}>
                        やめる
        </Button>
                    <Button
                        content="この人に決める"
                        labelPosition='right'
                        icon='checkmark'
                        onClick={() => { props.handleClick(); setOpen(false); setDone(true) }}
                        positive
                        disabled={!user}
                    />
                </Modal.Actions>
            </Modal>
            <Message
                hidden={!done}
                positive
                icon='check circle outline'
                header='マッチングが成立しました'
                content='チャットルームに移動して、時間いっぱいサポートを受けてください'
            />
        </React.Fragment>
    )
}

export default ReceivingButton