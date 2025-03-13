"use client"

import { SubtopicCategoryType } from '@/types'
import styles from './DiscussionList.module.css'

interface DiscussionListProps {
  subtopics: SubtopicCategoryType[]
  activeSubtopicId: number | null
  onSelectSubtopic: (subtopicId: number) => void
}

export default function DiscussionList({ 
  subtopics, 
  activeSubtopicId, 
  onSelectSubtopic 
}: DiscussionListProps) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Tetheros</h2>
        <div className={styles.tabs}>
          <button className={styles.tabActive}>All</button>
          <button className={styles.tab}>Unread</button>
          <button className={styles.tab}>Read</button>
        </div>
      </div>
      
      <div className={styles.discussionList}>
        {subtopics.map((subtopic) => (
          <div 
            key={subtopic._id}
            className={`${styles.discussionItem} ${activeSubtopicId === subtopic._id ? styles.active : ''}`}
            onClick={() => onSelectSubtopic(subtopic._id)}
          >
            <div className={styles.discussionTitle}>
              <h3>{subtopic.title}</h3>
              <span className={styles.topicCount}>
                {subtopic.topics ? subtopic.topics.length : 0}
              </span>
            </div>
            <p className={styles.discussionSubtitle}>{subtopic.subtitle}</p>
            <div className={styles.discussionMeta}>
              <span>Replies: {subtopic.topics ? subtopic.topics.length : 0}</span>
              <span>Views: {Math.floor(Math.random() * 100) + 1}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className={styles.scrollIndicator}>
        <span>Scroll</span>
        <div className={styles.arrow}>↓</div>
      </div>
    </div>
  )
} 