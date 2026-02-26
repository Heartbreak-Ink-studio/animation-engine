import { useCurrentFrame, useVideoConfig } from 'remotion';
import { useLayoutEffect } from 'react';
import { sheet } from './project';

export function useTheatreSheet() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  useLayoutEffect(() => {
    // Map Remotion frame to Theatre sequence position (in seconds)
    sheet.sequence.position = frame / fps;
  }, [frame, fps]);

  return sheet;
}
