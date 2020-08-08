import React from 'react';
import { Button, Icon } from 'semantic-ui-react'
import firebase from '../firebase-config'

const handleLogout = () => {
    firebase.auth().signOut().then(function (result) {
        console.log(result)
    }).catch(function (error) {
        console.log(error)
    })
}

const LogoutButton = () => {
    return (
        <Button secondary icon onClick={handleLogout}>
            <Icon name="user outline" />ログアウト
        </Button>
    )
}

export default LogoutButton