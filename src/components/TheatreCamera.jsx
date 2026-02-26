import React, { useEffect } from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import { editable as e } from '@theatre/r3f';

export function TheatreCamera({ makeDefault = true }) {
  return (
    <e.perspectiveCamera
      theatreKey="Camera"
      makeDefault={makeDefault}
      position={[0, 2, 5]}
      fov={50}
      near={0.1}
      far={100}
    />
  );
}
