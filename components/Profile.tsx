'use client'

import useSWR from 'swr';
import { ProfileData } from '@/types';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Profile() {
  const { data, error } = useSWR<ProfileData>('/api/profile', fetcher)

  if (error) return <div>Failed to load profile</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.bio}</p>
    </div>
  )
}
