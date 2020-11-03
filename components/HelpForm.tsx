import React from 'react';
import { Form, Button, Checkbox, Card, Image } from 'semantic-ui-react';

type Props = {
    title: string
    setTitle: (title: string) => void
    body: string
    setBody: (body: string) => void
    timebox: string
    setTimebox: (timebox: string) => void
    gift: string
    setGift: (fee: string) => void
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
            <Form.Field>
                <label>謝礼</label>
                <div className="flex justify-center flex-wrap">
                    <div className={`p-5 md:w-3/12 w-10/12 `}>
                        <div className={`border-8 hover:border-yellow-500 ${props.gift === "sho" ? "border-green-500" : ""}`}>
                            <Card fluid onClick={() => props.setGift("sho")}  >
                                <Image src='/sho.png' wrapped ui={false} />
                                <Card.Content>
                                    <Card.Header><Checkbox checked={props.gift === "sho"} /> 松コース [1,000円]</Card.Header>
                                    <Card.Description>助けてくれた人には900円相当のラーメンが届きます。ラーメンが苦手な人には代わりに同額のAmazonギフトカードが届きます。</Card.Description>
                                    {/* https://item.rakuten.co.jp/kikyoya/simada-3set/ */}
                                </Card.Content>
                            </Card>
                        </div>
                    </div>
                    <div className="p-5 md:w-5/12 w-11/12">
                        <div className={`border-8 hover:border-yellow-500 ${props.gift === "tiku" ? "border-green-500" : ""}`}>
                            <Card fluid onClick={() => props.setGift("tiku")}>
                                <Image src='/tiku.png' wrapped ui={false} />
                                <Card.Content>
                                    <Card.Header><Checkbox checked={props.gift === "tiku"} /> 竹コース [3,000円]</Card.Header>
                                    <Card.Description>助けてくれた人には2,700円相当の押し寿司が届きます。押し寿司が苦手な人には代わりに同額のAmazonギフトカードが届きます。</Card.Description>
                                    {/* https://item.rakuten.co.jp/w-tatibanaya/set-01/ */}
                                </Card.Content>
                            </Card>
                        </div>
                    </div>
                    <div className="p-5 md:w-3/12 w-10/12">
                        <div className={`border-8 hover:border-yellow-500 ${props.gift === "bai" ? "border-green-500" : ""}`}>
                            <Card fluid onClick={() => props.setGift("bai")}>
                                <Image src='/bai.png' wrapped ui={false} />
                                <Card.Content>
                                    <Card.Header><Checkbox checked={props.gift === "bai"} /> 梅コース [5,000円]</Card.Header>
                                    <Card.Description>助けてくれた人には4,500円相当のA5ランクの黒毛和牛が届きます。牛肉が苦手な人には代わりに同額のAmazonギフトカードが届きます。</Card.Description>
                                    {/* https://item.rakuten.co.jp/kouragumi/241000/ */}
                                </Card.Content>
                            </Card>
                        </div>
                    </div>
                </div>
            </Form.Field>
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