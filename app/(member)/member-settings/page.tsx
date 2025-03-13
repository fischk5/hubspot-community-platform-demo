"use client"

import { useState } from 'react'
import styles from './styles.module.css'
import { FaBell, FaShieldAlt, FaCog, FaChevronRight, FaArrowLeft } from 'react-icons/fa'
import Link from 'next/link'

// Define the settings structure
interface Setting {
  id: string;
  title: string;
  description: string;
  type: 'toggle' | 'select' | 'input' | 'radio' | 'checkbox';
  options?: string[];
  defaultValue?: string | boolean;
}

interface SettingsCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  settings: Setting[];
}

// Define the settings data
const settingsCategories: SettingsCategory[] = [
  {
    id: 'notifications',
    name: 'Notifications',
    icon: <FaBell />,
    settings: [
      {
        id: 'email_notifications',
        title: 'Email Notifications',
        description: 'Receive email notifications for important updates and activities',
        type: 'toggle',
        defaultValue: true
      },
      {
        id: 'discussion_alerts',
        title: 'Discussion Alerts',
        description: 'Get notified when someone replies to your discussions or mentions you',
        type: 'toggle',
        defaultValue: true
      },
      {
        id: 'event_reminders',
        title: 'Event Reminders',
        description: 'Receive reminders about upcoming events you\'ve registered for',
        type: 'select',
        options: ['1 hour before', '1 day before', '1 week before', 'Never'],
        defaultValue: '1 day before'
      },
      {
        id: 'digest_frequency',
        title: 'Community Digest',
        description: 'How often would you like to receive community activity summaries',
        type: 'select',
        options: ['Daily', 'Weekly', 'Monthly', 'Never'],
        defaultValue: 'Weekly'
      },
      {
        id: 'mobile_notifications',
        title: 'Mobile Push Notifications',
        description: 'Enable push notifications on your mobile devices',
        type: 'toggle',
        defaultValue: true
      }
    ]
  },
  {
    id: 'privacy',
    name: 'Privacy & Visibility',
    icon: <FaShieldAlt />,
    settings: [
      {
        id: 'profile_visibility',
        title: 'Profile Visibility',
        description: 'Control who can see your profile information',
        type: 'select',
        options: ['Everyone', 'Community Members Only', 'Connections Only', 'Only Me'],
        defaultValue: 'Community Members Only'
      },
      {
        id: 'activity_visibility',
        title: 'Activity Visibility',
        description: 'Control who can see your activities and contributions',
        type: 'select',
        options: ['Everyone', 'Community Members Only', 'Connections Only', 'Only Me'],
        defaultValue: 'Everyone'
      },
      {
        id: 'searchable',
        title: 'Search Visibility',
        description: 'Allow your profile to appear in search results',
        type: 'toggle',
        defaultValue: true
      },
      {
        id: 'contact_permissions',
        title: 'Contact Permissions',
        description: 'Control who can send you direct messages',
        type: 'select',
        options: ['Everyone', 'Community Members Only', 'Connections Only', 'Nobody'],
        defaultValue: 'Community Members Only'
      },
      {
        id: 'data_sharing',
        title: 'Data Sharing',
        description: 'Allow the community to use your data for personalized recommendations',
        type: 'toggle',
        defaultValue: false
      }
    ]
  },
  {
    id: 'preferences',
    name: 'Display & Preferences',
    icon: <FaCog />,
    settings: [
      {
        id: 'language',
        title: 'Language',
        description: 'Select your preferred language for the community platform',
        type: 'select',
        options: ['English', 'Spanish', 'French', 'German', 'Japanese', 'Chinese'],
        defaultValue: 'English'
      },
      {
        id: 'theme',
        title: 'Theme',
        description: 'Choose your preferred visual theme',
        type: 'select',
        options: ['Light', 'Dark', 'System Default'],
        defaultValue: 'System Default'
      },
      {
        id: 'content_density',
        title: 'Content Density',
        description: 'Control how compact or spacious the interface appears',
        type: 'select',
        options: ['Compact', 'Comfortable', 'Spacious'],
        defaultValue: 'Comfortable'
      },
      {
        id: 'timezone',
        title: 'Time Zone',
        description: 'Set your time zone for accurate event times and dates',
        type: 'select',
        options: ['UTC', 'Eastern Time (ET)', 'Pacific Time (PT)', 'Central European Time (CET)', 'Japan Standard Time (JST)'],
        defaultValue: 'Eastern Time (ET)'
      },
      {
        id: 'default_view',
        title: 'Default Home View',
        description: 'Choose what you see first when you log in',
        type: 'select',
        options: ['Activity Feed', 'Discussions', 'Events', 'My Content'],
        defaultValue: 'Activity Feed'
      }
    ]
  }
];

export default function MemberSettingsPage() {
  const [activeCategory, setActiveCategory] = useState<string>(settingsCategories[0].id);
  
  // Get the active category
  const currentCategory = settingsCategories.find(category => category.id === activeCategory);
  
  return (
    <div className={styles.settingsContainer}>
      {/* Back navigation */}
      <div className={styles.backNavigation}>
        <Link href="/" className={styles.backLink}>
          <FaArrowLeft /> Back to Dashboard
        </Link>
      </div>
      
      <div className={styles.settingsWrapper}>
        {/* Settings sidebar */}
        <div className={styles.settingsSidebar}>
          <h2 className={styles.settingsHeader}>Settings</h2>
          <nav className={styles.settingsNav}>
            {settingsCategories.map((category) => (
              <button
                key={category.id}
                className={`${styles.categoryButton} ${activeCategory === category.id ? styles.activeCategory : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className={styles.categoryIcon}>{category.icon}</span>
                {category.name}
                <span className={styles.categoryArrow}>
                  {activeCategory === category.id && <FaChevronRight />}
                </span>
              </button>
            ))}
          </nav>
        </div>
        
        {/* Settings content */}
        <div className={styles.settingsContent}>
          <div className={styles.settingsContentHeader}>
            <h1>{currentCategory?.name}</h1>
            <p className={styles.settingsDescription}>
              Manage your {currentCategory?.name.toLowerCase()} settings and preferences
            </p>
          </div>
          
          <div className={styles.settingsList}>
            {currentCategory?.settings.map((setting) => (
              <div key={setting.id} className={styles.settingItem}>
                <div className={styles.settingInfo}>
                  <h3 className={styles.settingTitle}>{setting.title}</h3>
                  <p className={styles.settingDescription}>{setting.description}</p>
                </div>
                
                <div className={styles.settingControl}>
                  {setting.type === 'toggle' && (
                    <div className={styles.toggleSwitch}>
                      <input 
                        type="checkbox" 
                        id={setting.id} 
                        defaultChecked={setting.defaultValue as boolean} 
                        className={styles.toggleInput}
                      />
                      <label htmlFor={setting.id} className={styles.toggleLabel}></label>
                    </div>
                  )}
                  
                  {setting.type === 'select' && (
                    <select className={styles.selectControl} defaultValue={setting.defaultValue as string}>
                      {setting.options?.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}