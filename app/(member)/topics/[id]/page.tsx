"use client"

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { TopicCategoryType } from '@/types'
import styles from './styles.module.css'
import { FaArrowLeft } from 'react-icons/fa6'
import useSWR from 'swr'

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
  const { data: topic, error } = useSWR<TopicCategoryType>(
    `/api/topics/${params.id}`,
    fetcher,
    {
      onError: () => {
        // Redirect to topics page on error
        router.push('/topics')
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

  return (
    <div className={styles.container}>
      <Link href="/topics" className={styles.backLink}>
        <FaArrowLeft /> Back to Topics
      </Link>
      <div className={styles.header}>
        <h1>{topic?.topic_name}</h1>
      </div>
    </div>
  )
} 