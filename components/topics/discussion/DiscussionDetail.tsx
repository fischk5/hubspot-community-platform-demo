"use client"

import { SubtopicCategoryType, DiscussionTopicType } from '@/types'
import styles from './DiscussionDetail.module.css'
import { formatISODateString } from '@/utils/dateUtils'
import { FaStar } from 'react-icons/fa6'

interface DiscussionDetailProps {
  subtopic: SubtopicCategoryType | null
}

export default function DiscussionDetail({ subtopic }: DiscussionDetailProps) {
  if (!subtopic) {
    return (
      <div className={styles.container}>
        <div className={styles.emptyState}>
          <p>Select a discussion topic to view details</p>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>{subtopic.title}</h2>
        <button className={styles.starButton}>
          <FaStar />
        </button>
      </div>
      
      <div className={styles.discussionsContainer}>
        {subtopic.topics && subtopic.topics.length > 0 ? (
          subtopic.topics.map((discussion: DiscussionTopicType) => (
            <div key={discussion._id} className={styles.discussionItem}>
              <div className={styles.discussionHeader}>
                <div className={styles.authorInfo}>
                  <div className={styles.authorAvatar}>
                    {discussion.author.charAt(0)}
                  </div>
                  <div className={styles.authorMeta}>
                    <span className={styles.authorName}>{discussion.author}</span>
                    <span className={styles.authorRole}>
                      {discussion.author.includes('Dev') ? 'Executive' : 'Member'}
                    </span>
                  </div>
                </div>
                <div className={styles.discussionDate}>
                  <div className={styles.dateIndicator}>
                    {new Date(discussion.posted_at).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                  <div className={styles.timeIndicator}>
                    {new Date(discussion.posted_at).toLocaleTimeString('en-US', {
                      hour: 'numeric',
                      minute: 'numeric',
                      hour12: true
                    })}
                  </div>
                </div>
              </div>
              <div className={styles.discussionContent}>
                <p>{discussion.content}</p>
              </div>
            </div>
          ))
        ) : (
          <div className={styles.emptyState}>
            <p>No discussions yet. Be the first to start a conversation!</p>
          </div>
        )}
      </div>
    </div>
  )
} 