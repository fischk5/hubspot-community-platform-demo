"use client"

import useSWR from "swr"
import styles from './styles.module.css'
import { TopicCategoryType } from "@/types";
import TopicCategory from "@/components/topics/TopicCategory"
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function TopicsPage() {
    const { data, error } = useSWR<TopicCategoryType[]>('/api/topics', fetcher)
    if (error) return <div>Something went wrong. Please try again later.</div>
    if (!data) return <div>Loading topics...</div>
    return (
        <div>
            <div className={styles.header}>
                <h1>Topics</h1>
                <button>New Topic</button>
            </div>
            <div className={styles.topicCategories}>
                {data.map((topicCategory) => (
                    <TopicCategory key={topicCategory._id} topicCategory={topicCategory} />
                ))}
            </div>
        </div>
    )
}