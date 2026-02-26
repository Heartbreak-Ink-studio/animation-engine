import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { SheetProvider } from '@theatre/r3f';
import { StudioWrapper } from '../../editor/StudioWrapper';
import { useTheatreSheet } from '../../theatre/useTheatreSheet';
import { TheatreCamera } from '../../components/TheatreCamera';
import { TheatreLights } from '../../components/TheatreLights';
import { TheatreCharacter } from '../../components/TheatreCharacter';
import { sheet } from '../../theatre/project';

// Scene Content (must be inside Canvas)
function SceneContent() {
  // Sync Remotion frame to Theatre sheet
  useTheatreSheet();

  return (
    <>
      <color attach="background" args={['#111']} />
      
      {/* Theatre-enabled components */}
      <SheetProvider sheet={sheet}>
        <TheatreCamera />
        <TheatreLights />
        <TheatreCharacter />
        
        {/* Simple ground plane for reference */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="#333" />
        </mesh>
      </SheetProvider>
    </>
  );
}

// Main Scene Component
export default function TheatreScene() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      {/* Studio UI (Dev Only) */}
      <StudioWrapper />
      
      <Canvas shadows>
        <SceneContent />
      </Canvas>
    </div>
  );
}
