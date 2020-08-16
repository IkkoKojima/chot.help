import React, { useState } from 'react';
import { Button, Icon, Modal, Image, Header, Message } from 'semantic-ui-react'
import firebase from 'firebase';
import LoginButton from './LoginButton';

type Props = {
    handleClick: () => void
    disabled?: boolean
}

const ApplicationButton = (props: Props) => {
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
                trigger={<Button disabled={props.disabled} icon primary><Icon name="hand paper" />申請する</Button>}
            >
                <Modal.Header>HELP!に応える</Modal.Header>
                <Modal.Content image>
                    {user
                        ?
                        <React.Fragment>
                            <Image size='medium' src={user.photoURL!.replace("_normal", "")} wrapped />
                            <Modal.Description>
                                <Header>{user.displayName} として申請します</Header>
                                <Message>
                                    <Message.Header>申請後の流れ</Message.Header>
                                    <Message.List>
                                        <Message.Item>あなたの申請が応募主に届きます</Message.Item>
                                        <Message.Item>応募主がいくつかの申請の中からあなたを選択すると、マッチングが成立します</Message.Item>
                                        <Message.Item>マッチング成立時に、chot.helpが一時的に応募主から料金をお預かりします</Message.Item>
                                        <Message.Item>マッチング成立後は、応募主の問題を一緒に解決してあげましょう</Message.Item>
                                        <Message.Item>設定された時間が経過した後は、お互いを評価してください</Message.Item>
                                        <Message.Item>お預かりした料金から手数料を差し引いた金額があなたに支払われます</Message.Item>
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
                        content="申請する"
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
                header='申請が完了しました'
                content='応募者が申請を受けるか決めるまで、少々お待ちください。'
            />
        </React.Fragment>
    )
}

export default ApplicationButton