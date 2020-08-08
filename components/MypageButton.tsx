import React from 'react';
import { Button, Icon } from 'semantic-ui-react'
import Link from 'next/link';

const MypageButton = () => {
    return (
        <Link href="/mypage">
            <Button primary icon>
                <Icon name="user" />マイページ
        </Button>
        </Link>
    )
}

export default MypageButton