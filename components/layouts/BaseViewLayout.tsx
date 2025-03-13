"use client"

import { ReactNode } from "react"
import styles from './BaseViewLayout.module.css'
import { useMode } from "@/contexts/ModeContext";
import Sidebar from "../sidebar/Sidebar";
import { NavItem } from "@/types";

interface BaseViewLayoutProps {
    children: ReactNode;
}

export default function BaseViewLayout({ children }: BaseViewLayoutProps) {
    const { mode } = useMode()
    let sidebarNavigationOptions: NavItem[] = []

    if (mode === "Admin") sidebarNavigationOptions = [
        { displayName: "Community", key: "community", targetNav: "/" },
        { displayName: "Members", key: "members", targetNav: "/members" },
        { displayName: "Settings", key: "settings", targetNav: "/admin-settings" }
    ]
        

    if (mode === "Member") sidebarNavigationOptions = [
        { displayName: "Home", key: "home", targetNav: "/" },
        { displayName: "Topics", key: "topics", targetNav: "/topics" },
        { displayName: "Events", key: "events", targetNav: "/events" },
        { displayName: "Settings", key: "settings", targetNav: "/member-settings" }
    ]
    return (
        <div className={styles.container}>
            <div className={styles.sidebarContainer}>
                <div className={styles.sidebarFloatingInnerContainer}>
                    <Sidebar navigationLinks={sidebarNavigationOptions} />
                </div>
            </div>

            <div className={styles.mainContent}>
                {children}
            </div>
        </div>
    )
}