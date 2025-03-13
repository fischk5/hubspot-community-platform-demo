"use client"

import { useMode } from '@/contexts/ModeContext';
import { useRouter } from 'next/navigation'
import styles from './Header.module.css'
import Image from 'next/image';
import hubspotLogo from '@/public/logoHubspot.jpg'

export default function Header() {
    const { mode, toggleMode } = useMode();
    const router = useRouter()
    const changeModeAndReroute = () => {
        toggleMode()
        router.push("/")
    }
    return (
        <div className={styles.container}>
            <Image src={hubspotLogo} alt="HubSpot logo" />
            <div className={styles.primaryHeadings}>
                <div className={styles.primaryHeading}>HubSpot Community Demo</div>
                <div className={styles.toggler} onClick={changeModeAndReroute}>{mode === "Member" ? "View as admin" : "View as member"}</div>
            </div>
        </div>
    )
}