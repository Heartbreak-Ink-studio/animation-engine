import { useEffect } from 'react';
import studio from '@theatre/studio';
import extension from '@theatre/r3f/dist/extension';

/**
 * Conditionally loads Theatre.js Studio in development mode.
 * This component should be placed at the root of the app or scene.
 */
export function StudioWrapper() {
  useEffect(() => {
    // Only load studio in development
    if (import.meta.env.DEV) {
      studio.initialize();
      studio.extend(extension);
    }
  }, []);

  return null;
}
