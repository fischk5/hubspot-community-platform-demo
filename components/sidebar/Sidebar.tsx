"use client"

import { SidebarProps } from '@/types'
import styles from './Sidebar.module.css'
import { CiHome, CiMicrophoneOn, CiChat1, CiSettings } from "react-icons/ci";
import { usePathname } from 'next/navigation';
import { LiaBullhornSolid, LiaIdBadge } from "react-icons/lia";
import Link from 'next/link';

function getNavigationItem(navKey: string): React.ReactNode {
    if (navKey === "home") return <CiHome/>
    if (navKey === "events") return <CiMicrophoneOn/>
    if (navKey === "topics") return <CiChat1/>
    if (navKey === "settings") return <CiSettings/>
    if (navKey === "community") return <LiaBullhornSolid/>
    if (navKey === "members") return <LiaIdBadge/>
    return null
}

export default function Sidebar({ navigationLinks }: SidebarProps ) {
    const pathname = usePathname();
    const firstSegment = pathname.split("/")[1];
    
    return (
        <div className={styles.sidebarOptions}>
            {navigationLinks.map((navLink) => {
                const isActive = firstSegment === navLink.targetNav.split("/")[1];
                return (
                <Link key={navLink.key} className={`${styles.navigationOption} ${isActive ? styles.active : ""}`} href={navLink.targetNav}>
                    {getNavigationItem(navLink.key)}
                    {navLink.displayName}
                </Link>
                )
            }
            )}
        </div>
    )
}