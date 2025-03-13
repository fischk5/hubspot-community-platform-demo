"use client"

import { TopicCategoryType } from '@/types'
import styles from './TopicCategory.module.css'
import { formatISODateString } from '@/utils/dateUtils'
import ReactIcon from '../icons/ReactIcon'
import { useRouter } from 'next/navigation'

interface TopicCategoryProps {
    topicCategory: TopicCategoryType;
}

export default function TopicCategory({ topicCategory } : TopicCategoryProps ) {
    const router = useRouter();

    const handleTopicClick = () => {
        router.push(`/topics/${topicCategory._id}`);
    };

    return (
        <div className={styles.topicContainer} >
            <div className={styles.topicTitlesContainer}>
                <div><ReactIcon keyname={topicCategory.icon} /></div>
                <div className={styles.topicTitles}>
                    <h5 onClick={handleTopicClick}>{topicCategory.topic_name}</h5>
                    <p>{topicCategory.topic_description}</p>
                </div>
                
            </div>
            <div className={styles.topicCount}>
                {topicCategory.subtopics ? <div>{topicCategory.subtopics.length}</div> : <div>0</div> }
                <div>Topics</div>
            </div>
            <div className={styles.topicMetadata}>
                <div>Last Updated</div>
                <div>{formatISODateString(topicCategory.last_updated)} ago</div>
            </div>
        </div>
    )
}