import Layout from '../../components/Layout'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { Statistic } from 'semantic-ui-react'

const HelpPage = (
    {
        user_id,
        title,
        body,
        timebox,
        fee
    }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        user_id !== "" ?
            <Layout title="Mypage | Next.js + TypeScript Example">
                <h1>{title}</h1>
                <p>{body}</p>
                <Statistic>
                    <Statistic.Value>{timebox}分</Statistic.Value>
                    <Statistic.Label>時間枠</Statistic.Label>
                </Statistic>
                <Statistic>
                    <Statistic.Value>{fee}円</Statistic.Value>
                    <Statistic.Label>報酬</Statistic.Label>
                </Statistic>
            </Layout>
            :
            <Layout title="そのページは存在しません | Next.js + TypeScript Example">
                <h1>そのページは存在しません</h1>
            </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const id = query.id
    const url = `${process.env.NODE_ENV === 'production' ? "https://chot.help" : process.env.VERCEL_URL}/api/db/get_help_from_id?id=${id}`
    const response = await fetch(url)
    const json = await response.json()
    return {
        props: {
            id,
            user_id: json.data.user_id,
            title: json.data.title,
            body: json.data.body,
            timebox: json.data.timebox,
            fee: json.data.fee
        },
    }
}

export default HelpPage
