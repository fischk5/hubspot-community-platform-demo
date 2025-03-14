'use client';

import { useEffect } from 'react';
import { useTour } from './TourContext';
import TourBox from './TourBox';
import TourTrigger from './TourTrigger';
import { usePathname } from 'next/navigation';

export default function TourManager() {
  const { isActive, currentStep, endTour } = useTour();
  const pathname = usePathname();
  
  // End the tour when navigating to an unknown path
  useEffect(() => {
    if (isActive && currentStep) {
      // List of known paths in our application
      const isKnownPath = ['/topics', '/topics/1234455', '/events', '/member-settings', '/'].includes(pathname);
      
      // If user manually navigates to an unknown path, end the tour
      if (!isKnownPath) {
        endTour();
      }
    }
  }, [pathname, isActive, currentStep, endTour]);
  
  return (
    <>
      <TourTrigger />
      <TourBox />
    </>
  );
} 