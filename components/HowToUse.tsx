import React from 'react';

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