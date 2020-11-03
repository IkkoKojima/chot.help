import React from 'react';
import { List } from 'semantic-ui-react';

const About = () => {
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
        </React.Fragment>
    )
}

export default About