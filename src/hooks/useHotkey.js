import { useEffect } from 'react';

export function useHotkey(key, callback, metaOrCtrl = false) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (metaOrCtrl) {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === key.toLowerCase()) {
          e.preventDefault();
          callback();
        }
      } else {
        if (e.key.toLowerCase() === key.toLowerCase()) {
          callback();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [key, callback, metaOrCtrl]);
}
