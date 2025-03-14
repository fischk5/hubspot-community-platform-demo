'use client';

import { useEffect, useState } from 'react';
import { useTour } from './TourContext';
import styles from './Tour.module.css';
import tourConfig from './tourConfig';

export default function TourBox() {
  const { 
    isActive, 
    currentStep, 
    currentStepIndex, 
    goToNextStep, 
    goToPreviousStep, 
    endTour
  } = useTour();
  
  const [highlightElement, setHighlightElement] = useState<DOMRect | null>(null);
  const [highlightAttempted, setHighlightAttempted] = useState(false);
  
  // Find and highlight the target element if specified
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    if (isActive && currentStep?.highlightSelector) {
      setHighlightAttempted(false);
      
      // Use a delay to ensure the DOM is ready
      timeoutId = setTimeout(() => {
        try {
          const selector = currentStep.highlightSelector;
          if (selector) {
            const element = document.querySelector(selector);
            
            if (element) {
              const rect = element.getBoundingClientRect();
              setHighlightElement(rect);
            } else {
              console.warn(`Element with selector "${selector}" not found`);
              setHighlightElement(null);
            }
          }
        } catch (error) {
          console.error('Error finding highlight element:', error);
          setHighlightElement(null);
        }
        setHighlightAttempted(true);
      }, 500);
    } else {
      setHighlightElement(null);
      setHighlightAttempted(true);
    }
    
    // Cleanup when component unmounts or step changes
    return () => {
      clearTimeout(timeoutId);
      setHighlightElement(null);
      setHighlightAttempted(false);
    };
  }, [isActive, currentStep]);
  
  // If tour is not active or if no current step, don't render anything
  if (!isActive || !currentStep) {
    return null;
  }
  
  // Determine the position class based on the current step's position
  const positionClass = styles[currentStep.position.replace('-', '') as keyof typeof styles] || styles.bottomRight;

  // Get total number of steps
  const totalSteps = tourConfig.steps.length;
  
  // Handle next step click
  const handleNextClick = () => {
    goToNextStep();
  };
  
  // Handle previous step click
  const handlePreviousClick = () => {
    goToPreviousStep();
  };
  
  // Handle contact click for the final step
  const handleContactClick = () => {
    // End the tour
    endTour();
    
    // Open mailto link
    window.location.href = "mailto:kevin@tetheros.com?subject=Loved%20the%20demo%20-%20let's%20talk";
  };
  
  // Render the tour box
  return (
    <>
      {/* Highlight element overlay */}
      {highlightElement && (
        <div 
          className={styles.highlight}
          style={{
            top: highlightElement.top + 'px',
            left: highlightElement.left + 'px',
            width: highlightElement.width + 'px',
            height: highlightElement.height + 'px',
          }}
        />
      )}
      
      {/* Tour dialog */}
      <div className={`${styles.tourBox} ${positionClass}`}>
        <div className={styles.tourTitle}>{currentStep.title}</div>
        
        <div className={styles.tourDescription}>
          {Array.isArray(currentStep.description) ? (
            currentStep.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))
          ) : (
            <p>{currentStep.description}</p>
          )}
        </div>
        
        <div className={styles.tourControls}>
          <div>
            {currentStepIndex > 0 && (
              <button 
                className={`${styles.tourButton} ${styles.secondaryButton}`}
                onClick={handlePreviousClick}
              >
                Previous
              </button>
            )}
          </div>
          
          <div>
            {currentStepIndex < totalSteps - 1 ? (
              <button 
                className={`${styles.tourButton} ${styles.primaryButton}`}
                onClick={handleNextClick}
              >
                Next
              </button>
            ) : (
              <button 
                className={`${styles.tourButton} ${styles.primaryButton}`}
                onClick={handleContactClick}
              >
                Contact Kevin
              </button>
            )}
          </div>
        </div>
        
        {/* Progress indicators */}
        <div className={styles.progress}>
          {tourConfig.steps.map((_, index) => (
            <div 
              key={index}
              className={`${styles.progressDot} ${index === currentStepIndex ? styles.active : ''}`}
            />
          ))}
        </div>
      </div>
    </>
  );
} 