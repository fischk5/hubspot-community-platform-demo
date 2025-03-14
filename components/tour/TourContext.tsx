'use client';

import React, { createContext, useState, useContext, useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { TourContextType, TourStep } from '@/types';
import tourConfig from './tourConfig';

// Create context with default values
const TourContext = createContext<TourContextType>({
  isActive: false,
  currentStepIndex: 0,
  isCompleted: false,
  startTour: () => {},
  endTour: () => {},
  goToNextStep: () => {},
  goToPreviousStep: () => {},
  resumeTour: () => {},
  currentStep: null,
});

export const useTour = () => useContext(TourContext);

export const TourProvider = ({ children }: { children: React.ReactNode }) => {
  const [isActive, setIsActive] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [pendingNavigation, setPendingNavigation] = useState(false);
  
  const router = useRouter();
  const pathname = usePathname();
  
  const currentStep = isActive ? tourConfig.steps[currentStepIndex] : null;
  
  // Handle automatic navigation when the step changes
  useEffect(() => {
    if (isActive && currentStep && currentStep.path !== pathname) {
      // Navigate to the path of the current step
      router.push(currentStep.path);
    }
  }, [isActive, currentStepIndex, currentStep, router, pathname]);
  
  // Start the tour
  const startTour = () => {
    setCurrentStepIndex(0);
    setIsActive(true);
    setIsCompleted(false);
  };
  
  // End the tour
  const endTour = () => {
    setIsActive(false);
    setIsCompleted(true);
  };
  
  // Go to the next step with navigating to the corresponding page
  const goToNextStep = () => {
    if (currentStepIndex < tourConfig.steps.length - 1) {
      // Set pending navigation to avoid double navigation
      setPendingNavigation(true);
      
      // Use setTimeout to ensure state updates in correct order
      setTimeout(() => {
        setCurrentStepIndex(prevIndex => prevIndex + 1);
        setPendingNavigation(false);
      }, 50);
    } else {
      // Tour is complete
      endTour();
    }
  };
  
  // Go to the previous step with navigating to the corresponding page
  const goToPreviousStep = () => {
    if (currentStepIndex > 0) {
      // Set pending navigation to avoid double navigation
      setPendingNavigation(true);
      
      // Use setTimeout to ensure state updates in correct order
      setTimeout(() => {
        setCurrentStepIndex(prevIndex => prevIndex - 1);
        setPendingNavigation(false);
      }, 50);
    }
  };
  
  // Resume the tour
  const resumeTour = () => {
    setIsActive(true);
  };
  
  return (
    <TourContext.Provider
      value={{
        isActive,
        currentStepIndex,
        isCompleted,
        startTour,
        endTour,
        goToNextStep,
        goToPreviousStep,
        resumeTour,
        currentStep,
      }}
    >
      {children}
    </TourContext.Provider>
  );
}; 