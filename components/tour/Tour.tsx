'use client';

import { TourProvider } from './TourContext';
import TourManager from './TourManager';

export default function Tour({ children }: { children: React.ReactNode }) {
  return (
    <TourProvider>
      {children}
      <TourManager />
    </TourProvider>
  );
} 