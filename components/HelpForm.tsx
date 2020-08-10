import React from 'react';
import { Form, Button } from 'semantic-ui-react';

type Props = {
    title: string
    setTitle: (title: string) => void
    body: string
    setBody: (body: string) => void
    timebox: string
    setTimebox: (timebox: string) => void
    fee: string
    setFee: (fee: string) => void
    handleClick: () => void
}

const HelpForm = (props: Props) => {
    return (
        <Form>
            <Form.Field>
                <label>タイトル(必須)</label>
                <input
                    value={props.title}
                    onChange={(event) => props.setTitle(event.target.value)}
                    placeholder="Ruby on Rails の環境構築でつまづいています"
                />
            </Form.Field>
            <Form.Field>
                <label>詳細(必須)</label>
                <textarea
                    value={props.body}
                    onChange={(event) => props.setBody(event.target.value)}
                    placeholder={'http://techxxxxxx.jp/yyy/zz を参考にしてRuby on Railsの環境構築を進めているのですが、つまづいています。\n手順4まで進み、$ gem install rails というコマンドを入れたところ、以下のようなエラーが出てしまいました。\n\nCould not find gem sqlite3 (~> 1.3.6) in any of the gem sources listed in your Gemfile.\nRun `bundle install` to install missing gems.\n\nその後、Gemfileのgem sqlite3→gem sqlite3 ~> 1.3.6に書き換えbundle installしましたが、またしてもエラーが出てしまいました。\n...'}
                />
            </Form.Field>
            <Form.Input
                value={props.timebox}
                onChange={(event) => props.setTimebox(event.target.value)}
                label={`時間 : ${props.timebox}分`}
                min={10}
                max={120}
                step={10}
                type="range"
            />
            <Form.Input
                value={props.fee}
                onChange={(event) => props.setFee(event.target.value)}
                label={`金額 : ${props.fee}円`}
                min={500}
                max={5000}
                step={500}
                type="range"
            />
            <Button
                disabled={props.title === "" || props.body === ""}
                primary
                type='submit'
                onClick={props.handleClick}
            >
                HELP!ツイートする<br />(まだお支払いは行われません)
                </Button>
        </Form>
    )
}

export default HelpForm