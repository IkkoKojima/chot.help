import React, { useState } from 'react';
import { Form, Button, Message } from 'semantic-ui-react';

const HelpForm = () => {
    const [title, setTitle] = useState<string>("")
    const [body, setBody] = useState<string>("")
    const [timebox, setTimebox] = useState<string>("30")
    const [fee, setFee] = useState<string>("1000")
    return (
        <Form>
            <Form.Field>
                <label>タイトル(必須)</label>
                <input
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    placeholder="Ruby on Rails の環境構築でつまづいています"
                />
            </Form.Field>
            <Form.Field>
                <label>詳細(必須)</label>
                <textarea
                    value={body}
                    onChange={(event) => setBody(event.target.value)}
                    placeholder={'http://techxxxxxx.jp/yyy/zz を参考にしてRuby on Railsの環境構築を進めているのですが、つまづいています。\n手順4まで進み、$ gem install rails というコマンドを入れたところ、以下のようなエラーが出てしまいました。\n\nCould not find gem sqlite3 (~> 1.3.6) in any of the gem sources listed in your Gemfile.\nRun `bundle install` to install missing gems.\n\nその後、Gemfileのgem sqlite3→gem sqlite3 ~> 1.3.6に書き換えbundle installしましたが、またしてもエラーが出てしまいました。\n...'}
                />
            </Form.Field>
            <Form.Input
                value={timebox}
                onChange={(event) => setTimebox(event.target.value)}
                label={`時間 : ${timebox}分`}
                min={10}
                max={120}
                step={10}
                type="range"
            />
            <Form.Input
                value={fee}
                onChange={(event) => setFee(event.target.value)}
                label={`金額 : ${fee}円`}
                min={500}
                max={5000}
                step={500}
                type="range"
            />
            <Button disabled={title === "" || body === ""} primary type='submit'>HELP!ツイートする<br />(まだお支払いは行われません)</Button>
            <Message>
                <Message.Header>HELP!ツイートした後の流れ</Message.Header>
                <Message.List>
                    <Message.Item>あなたのツイートを見て、興味のあるメンターが申し込みをします</Message.Item>
                    <Message.Item>あなたが申し込みの中から1人を選択すると、マッチングが成立します</Message.Item>
                    <Message.Item>マッチング成立時に、chot.helpが一時的にあなたから料金をお預かりします</Message.Item>
                    <Message.Item>マッチング成立後は、問題をメンターと解決していきましょう</Message.Item>
                    <Message.Item>設定した時間が経過した後は、お互いを評価してください</Message.Item>
                    <Message.Item>お預かりした料金から手数料を差し引いた金額がメンターに支払われます</Message.Item>
                </Message.List>
                <br />
                ※ トラブルやイタズラなど、メンターが仕事を放棄したことが確認できた場合、料金は払い戻しいたします
            </Message>
        </Form>
    )
}

export default HelpForm