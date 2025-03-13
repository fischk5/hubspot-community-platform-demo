"use client"

import { EventType } from '@/types'
import styles from './EventCard.module.css'
import Image from 'next/image'
import { formatEventDate } from '@/utils/dateUtils'

interface EventCardProps {
    event: EventType;
}

export default function EventCard({ event }: EventCardProps) {
    // Format the date for display
    const formattedDate = formatEventDate(event.date);
    
    // Format the cost for display
    const formattedCost = event.cost === 0 
        ? 'Free' 
        : `$${event.cost.toFixed(2)}`;
    
    return (
        <div className={styles.eventCard}>
            <div className={styles.imageContainer}>
                <Image 
                    src={event.featureImage} 
                    alt={event.name}
                    width={300}
                    height={180}
                    className={styles.eventImage}
                />
            </div>
            
            <div className={styles.eventContent}>
                <div className={styles.eventHeader}>
                    <h2 className={styles.eventTitle}>{event.name}</h2>
                    <div className={styles.eventCost}>{formattedCost}</div>
                </div>
                
                <div className={styles.eventMeta}>
                    <div className={styles.eventDate}>{formattedDate}</div>
                    <div className={styles.eventLocation}>{event.location}</div>
                    {event.organizer && (
                        <div className={styles.eventOrganizer}>
                            Organized by: {event.organizer}
                        </div>
                    )}
                </div>
                
                <div className={styles.eventDescription}>
                    {event.description}
                </div>
                
                <div className={styles.eventFooter}>
                    <div className={styles.eventTags}>
                        {event.tags.map((tag, index) => (
                            <span key={index} className={styles.tag}>{tag}</span>
                        ))}
                    </div>
                    
                    <div className={styles.eventActions}>
                        {event.isRegistered ? (
                            <button className={`${styles.actionButton} ${styles.registeredButton}`}>
                                Registered
                            </button>
                        ) : (
                            <button className={styles.actionButton}>
                                Register
                            </button>
                        )}
                        <button className={styles.detailsButton}>
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
} 