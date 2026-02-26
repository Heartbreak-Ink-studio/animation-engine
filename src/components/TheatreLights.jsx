import React, { useRef } from 'react';
import { editable as e } from '@theatre/r3f';

/**
 * Theatre-ready 3-point lighting setup.
 * Wraps the standard lights in editable groups for keyframing.
 */
export function TheatreLights() {
  return (
    <group>
      {/* Key Light - Main illumination */}
      <e.group theatreKey="Key Light">
        <pointLight
          position={[2, 3, 2]}
          intensity={50}
          color="#ffffff"
          castShadow
        />
      </e.group>

      {/* Fill Light - Softens shadows */}
      <e.group theatreKey="Fill Light">
        <pointLight
          position={[-3, 1, 3]}
          intensity={15}
          color="#a0a0ff" // Cool fill
        />
      </e.group>

      {/* Rim Light - Separates subject from background */}
      <e.group theatreKey="Rim Light">
        <spotLight
          position={[0, 4, -3]}
          intensity={80}
          color="#ffaa00" // Warm rim
          angle={0.6}
          penumbra={0.5}
          castShadow
        />
      </e.group>
      
      {/* Ambient Light - Base level visibility */}
      <e.group theatreKey="Ambient Light">
        <ambientLight intensity={0.2} />
      </e.group>
    </group>
  );
}
