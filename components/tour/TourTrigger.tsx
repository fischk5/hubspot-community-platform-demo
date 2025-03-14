'use client';

import { useState, useEffect, useRef } from 'react';
import { useTour } from './TourContext';
import styles from './Tour.module.css';
import { FaLightbulb, FaPause, FaPlay } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

export default function TourTrigger() {
  const { isActive, isCompleted, startTour, resumeTour, endTour } = useTour();
  const [showPrompt, setShowPrompt] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  
  // Show the trigger after a short delay on initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPrompt(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  if (!showPrompt) {
    return null;
  }
  
  // Handle trigger click
  const handleTriggerClick = () => {
    if (isActive) {
      // If tour is active, clicking the button pauses/ends the tour
      endTour();
    } else {
      // Otherwise show the menu
      setShowMenu(true);
    }
  };
  
  // Start or restart the tour from beginning
  const handleStartTour = () => {
    startTour();
    setShowMenu(false);
  };
  
  // Resume the tour where it was left off
  const handleResumeTour = () => {
    resumeTour();
    setShowMenu(false);
  };
  
  return (
    <div className={styles.tourTriggerContainer} ref={menuRef}>
      <div 
        className={`${styles.tourTrigger} ${isActive ? styles.tourActive : ''}`} 
        onClick={handleTriggerClick}
      >
        {isActive ? <FaPause /> : <FaLightbulb />}
      </div>
      
      {showMenu && !isActive && (
        <div className={styles.tourMenu}>
          {isCompleted ? (
            <>
              <div className={styles.tourMenuTitle}>Tour Options</div>
              <button 
                className={styles.tourMenuOption} 
                onClick={handleResumeTour}
              >
                Resume Tour
              </button>
              <button 
                className={styles.tourMenuOption} 
                onClick={handleStartTour}
              >
                Restart Tour
              </button>
            </>
          ) : (
            <>
              <div className={styles.tourMenuTitle}>Take a Tour?</div>
              <button 
                className={styles.tourMenuOption} 
                onClick={handleStartTour}
              >
                Start Guided Tour
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
} 