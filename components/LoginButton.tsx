import React from 'react';
import { Button, Icon } from 'semantic-ui-react'
import { handleLogin } from '../firebase-config'

const LoginButton = () => {
    return (
        <Button primary icon onClick={handleLogin}>
            <Icon name="user outline" />ログイン
        </Button>
    )
}

export default LoginButton