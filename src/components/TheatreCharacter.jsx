import React from 'react';
import { editable as e } from '@theatre/r3f';
import { Character } from './Character';

/**
 * Wrapper for the Character component that makes it keyframeable in Theatre.js.
 * We wrap the Character in an editable group so we can animate its
 * position, rotation, and scale without modifying the inner component.
 */
export function TheatreCharacter(props) {
  return (
    <e.group theatreKey="Character" position={[0, 0, 0]}>
      <Character {...props} />
    </e.group>
  );
}
