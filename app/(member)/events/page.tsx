"use client"

import { useState } from 'react'
import useSWR from 'swr'
import styles from './styles.module.css'
import { EventType } from "@/types"
import EventCard from "@/components/events/EventCard"

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function EventsPage() {
    const { data, error } = useSWR<EventType[]>('/api/events', fetcher)
    const [activeTab, setActiveTab] = useState<'all' | 'registered'>('all')
    
    if (error) return <div>Something went wrong. Please try again later.</div>
    if (!data) return <div>Loading events...</div>
    
    // Filter events based on active tab
    const filteredEvents = activeTab === 'all' 
        ? data 
        : data.filter(event => event.isRegistered);
    
    return (
        <div>
            <div className={styles.header}>
                <h1>Events</h1>
                <button>New Event</button>
            </div>
            
            <div className={styles.tabContainer}>
                <button 
                    className={`${styles.tabButton} ${activeTab === 'all' ? styles.activeTab : ''}`}
                    onClick={() => setActiveTab('all')}
                >
                    All
                </button>
                <button 
                    className={`${styles.tabButton} ${activeTab === 'registered' ? styles.activeTab : ''}`}
                    onClick={() => setActiveTab('registered')}
                >
                    Registered
                </button>
            </div>
            
            <div className={styles.eventsList}>
                {filteredEvents.length > 0 ? (
                    filteredEvents.map((event) => (
                        <EventCard key={event._id} event={event} />
                    ))
                ) : (
                    <div className={styles.noEvents}>
                        No events found for the selected filter.
                    </div>
                )}
            </div>
        </div>
    )
}