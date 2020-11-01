import React from 'react';
import { List } from 'semantic-ui-react';

const Flow = (left: boolean, right: boolean, title: string, body: string) => {
    const position = left ? right ? "justify-self-center border-green-400" : "justify-self-start border-yellow-400" : "justify-self-end border-indigo-400"
    return (
        <div className={`${position} grid grid-rows-3 grid-flow-col gap-3 max-w-screen-md border-4 rounded-2xl p-4`}>
            {left ? <div className="row-span-3">
                <img src="/woman.svg" className="w-48 h-48" />
            </div> : <React.Fragment />}
            <div className="row-span-1 col-span-2">
                <h2 className="text-xl sm:text-3xl text-center">{title}</h2>
            </div>
            <div className="row-span-2 col-span-2">
                <p className="text-center">{body}</p>
            </div>
            {right ? <div className="row-span-3">
                <img src="/man.svg" className="w-48 h-48" />
            </div> : <React.Fragment />}
        </div>
    )
}

const HowToUse = () => {
    return (
        <React.Fragment>
            <div className="py-10">
                <h1 className="text-2xl sm:text-5xl font-bold text-center">chot.HELPとは？</h1>
                <p className="text-xl sm:text-3xl text-center">困っている人とスキルがある人を謝礼と評価でマッチングするサービスです</p>
            </div>
            <div className="bg-gray-300 py-5">
                <h1 className="text-2xl sm:text-5xl font-bold text-center">こんなことはありませんか？</h1>
                <div className="md:flex">
                    <div className="m-2 p-2 flex-1">
                        <h2 className="text-xl sm:text-3xl">問題が解決しない</h2>
                        <List>
                            <List.Item>
                                <List.Icon name="question circle" />
                                <List.Content>なにが分からないのか分からない、身近に頼れる人もいない</List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name="question circle" />
                                <List.Content>開発環境依存の謎エラーや、プロジェクトのアーキテクチャー設計などググっても解決しない問題を抱えている</List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name="question circle" />
                                <List.Content>TwitterやStackOverflowで質問したが回答がもらえない、もらえても的確なものでない</List.Content>
                            </List.Item>
                        </List>
                    </div>
                    <div className="m-2 p-2 flex-1">
                        <h2 className="text-xl sm:text-3xl">人助けのモチベが続かない</h2>
                        <List>
                            <List.Item>
                                <List.Icon name="question circle" />
                                <List.Content>人に何か教えるのは嫌いではないが、業務でもないのに進んでやるほどではない</List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name="question circle" />
                                <List.Content>親切心で初学者に手を差し伸べたけど、質問が要領を得ないので何が起きているのか把握できない</List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name="question circle" />
                                <List.Content>Twitterで質問があったのでなんとなく回答したが、やりとりが長期化してきてしんどい</List.Content>
                            </List.Item>
                        </List>
                    </div>
                </div>
            </div>
            <div className="bg-yellow-400 py-10">
                <h1 className="text-2xl sm:text-5xl font-bold text-center">chot.HELPなら</h1>
                <div className="md:flex">
                    <div className="m-2 p-2 flex-1">
                        <h2 className="text-xl sm:text-3xl">スムーズに問題が解決する</h2>
                        <List>
                            <List.Item>
                                <List.Icon name="check circle outline" />
                                <List.Content>スキルのある人が時間いっぱい全力で助けてくれるので、問題が解決しやすい</List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name="check circle outline" />
                                <List.Content>相手の評価を確認してから問題の解決を依頼できるので、依頼に失敗しにくい</List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name="check circle outline" />
                                <List.Content>口頭でやりとりするので、状況の伝達やラフな質問が可能で、問題が解決に向かう</List.Content>
                            </List.Item>
                        </List>
                    </div>
                    <div className="m-2 p-2 flex-1">
                        <h2 className="text-xl sm:text-3xl">モチベ高く人助けできる</h2>
                        <List>
                            <List.Item>
                                <List.Icon name="check circle outline" />
                                <List.Content>謝礼がもらえるので、やる気が下がりにくい</List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name="check circle outline" />
                                <List.Content>口頭でやりとりするので、認識の齟齬が発生しにくく、やりとりもスムーズに進む</List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name="check circle outline" />
                                <List.Content>時間が決まっているので、拘束時間が想定より多くなることを避けられる</List.Content>
                            </List.Item>
                        </List>
                    </div>
                </div>
            </div>
            <div className="py-10">
                <h1 className="text-2xl sm:text-5xl font-bold text-center">chot.HELPの使い方</h1>

                <div className="grid grid-cols-1 gap-5 p-5">
                    {Flow(
                        true,
                        false,
                        "助けてくれる人を募集",
                        "30分ググってもわからない時は詳しい人に助けてもらいましょう！時間と謝礼を設定してツイートすると詳しい人が見つけてくれます！この時点ではお金はかかりません。"
                    )}
                    {Flow(
                        false,
                        true,
                        "依頼に応募する",
                        "あ、自分が解決できるかも！と思った依頼には手を挙げることができます！コミットする時間と、もらえる謝礼は事前にしっかりと確認しておきましょう。"
                    )}
                    {Flow(
                        true,
                        false,
                        "請負人を1人に決定",
                        "応募者が複数人いる場合は、その中からひとりを選んでください。選択する際には応募者の評価を参考にしましょう！"
                    )}
                    {Flow(
                        true,
                        true,
                        "マッチング成立",
                        "これでマッチングが成立します。この時点で謝礼に充てる料金をchot.HELP運営がお預かりいたします。"
                    )}
                    {Flow(
                        true,
                        true,
                        "時間内で問題を解決",
                        "請負人は時間内に全力で問題の解決に向けて動きましょう！ZOOM・GoogleMeet・Discordなどのボイスチャットに移動するとやりとりがスムーズなのでおすすめです。"
                    )}
                    {Flow(
                        true,
                        true,
                        "マッチング終了",
                        "決められた時間が経過したらマッチングは終了です。問題は解決しましたか？"
                    )}
                    {Flow(
                        true,
                        true,
                        "お互いを評価",
                        "相手を10段階で評価しましょう。評価は他のユーザーにも公開されます。良い依頼人・請負人が集まるプラットフォームにしていくためにご協力ください。"
                    )}
                    {Flow(
                        false,
                        true,
                        "謝礼が届く",
                        "マッチングの謝礼が届きます。全力で問題解決にコミットしたあなたには正当な報酬です！"
                    )}

                </div>
            </div>
        </React.Fragment>
    )
}

export default HowToUse