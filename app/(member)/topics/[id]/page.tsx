"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { TopicCategoryType, SubtopicCategoryType } from '@/types'
import styles from './styles.module.css'
import { FaArrowLeft } from 'react-icons/fa6'
import useSWR from 'swr'
import DiscussionList from '@/components/topics/discussion/DiscussionList'
import DiscussionDetail from '@/components/topics/discussion/DiscussionDetail'

interface TopicDetailPageProps {
  params: {
    id: string
  }
}

const fetcher = (url: string) => fetch(url).then((res) => {
  if (!res.ok) throw new Error('Failed to fetch topic')
  return res.json()
})

export default function TopicDetailPage({ params }: TopicDetailPageProps) {
  const router = useRouter()
  const [activeSubtopicId, setActiveSubtopicId] = useState<number | null>(null)
  
  const { data: topic, error } = useSWR<TopicCategoryType>(
    `/api/topics/${params.id}`,
    fetcher,
    {
      onError: () => {
        // Redirect to topics page on error
        router.push('/topics')
      },
      onSuccess: (data) => {
        // Set the first subtopic as active by default if available
        if (data.subtopics && data.subtopics.length > 0 && !activeSubtopicId) {
          setActiveSubtopicId(data.subtopics[0]._id)
        }
      }
    }
  )

  // Handle loading state
  if (!topic && !error) {
    return <div>Loading topic...</div>
  }

  // Handle error state (though we redirect on error, this is a fallback)
  if (error) {
    return null // This shouldn't render as we redirect in the onError callback
  }

  const activeSubtopic = topic?.subtopics?.find(
    (subtopic) => subtopic._id === activeSubtopicId
  ) || null

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <Link href="/topics" className={styles.backLink}>
          <FaArrowLeft /> Back to Topics
        </Link>
        <h1 className={styles.topicName}>{topic?.topic_name}</h1>
      </div>
      
      <div className={styles.contentContainer}>
        {topic?.subtopics && (
          <DiscussionList 
            subtopics={topic.subtopics}
            activeSubtopicId={activeSubtopicId}
            onSelectSubtopic={setActiveSubtopicId}
          />
        )}
        
        <DiscussionDetail subtopic={activeSubtopic} />
      </div>
    </div>
  )
} 