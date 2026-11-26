import React, { createContext, useContext, useState } from 'react';
import ResumeModal from '../components/ui/ResumeModal.jsx';

const ResumeContext = createContext({
  openResume: () => {},
});

/**
 * Provides a shared resume preview modal trigger accessible across all pages and navigation bars.
 */
export function ResumeProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ResumeContext.Provider value={{ openResume: () => setIsOpen(true) }}>
      {children}
      <ResumeModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </ResumeContext.Provider>
  );
}

export function useResumeModal() {
  return useContext(ResumeContext);
}
