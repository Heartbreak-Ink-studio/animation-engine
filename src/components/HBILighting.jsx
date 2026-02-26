import React, {useEffect} from 'react';
import {Environment} from '@react-three/drei';
import {useThree} from '@react-three/fiber';
import * as THREE from 'three';
import {EffectComposer, Bloom} from '@react-three/postprocessing';

export function HBILighting() {
  const {gl} = useThree();

  useEffect(() => {
    gl.toneMapping = THREE.ACESFilmicToneMapping;
    gl.outputColorSpace = THREE.SRGBColorSpace;
    gl.toneMappingExposure = 1.05;
  }, [gl]);

  return (
    <>
      {/* 3-point rig */}
      <ambientLight intensity={0.22} />
      <directionalLight
        position={[2.4, 2.8, 3.5]}
        intensity={2.6}
        color="#fff5ef"
        castShadow
      />
      <directionalLight
        position={[-2.5, 1.7, 2]}
        intensity={1.05}
        color="#c8deff"
      />
      <directionalLight
        position={[0, 2, -3.5]}
        intensity={0.85}
        color="#ffc6f2"
      />

      {/* Environment map */}
      <Environment preset="city" />

      {/* Subtle cinematic bloom */}
      <EffectComposer>
        <Bloom
          intensity={0.35}
          luminanceThreshold={0.6}
          luminanceSmoothing={0.3}
        />
      </EffectComposer>
    </>
  );
}
