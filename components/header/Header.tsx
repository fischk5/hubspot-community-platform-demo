"use client"

import { useMode } from '@/contexts/ModeContext';
import { useRouter } from 'next/navigation'
import styles from './Header.module.css'
import Image from 'next/image';
import hubspotLogo from '@/public/logoHubspot.jpg'

export default function Header() {
    const { mode } = useMode();
    const router = useRouter()
    
    return (
        <div className={styles.container}>
            <Image src={hubspotLogo} alt="HubSpot logo" />
            <div className={styles.primaryHeadings}>
                <div className={styles.primaryHeading}>HubSpot Community Demo</div>
            </div>
        </div>
    )
}