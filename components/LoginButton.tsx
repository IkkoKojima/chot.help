import React from 'react';
import { Button, Icon } from 'semantic-ui-react'
import firebase, { providerTwitter } from '../firebase-config'

const handleLogin = () => {
    firebase.auth().signInWithPopup(providerTwitter).then(function (result) {
        console.log(result)
    }).catch(function (error) {
        console.log(error)
    })
}

const LoginButton = () => {
    return (
        <Button primary icon onClick={handleLogin}>
            <Icon name="user outline" />ログイン
        </Button>
    )
}

export default LoginButton