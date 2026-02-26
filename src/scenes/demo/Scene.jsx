import React, {useMemo} from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls, ContactShadows} from '@react-three/drei';
import {Audio, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {useAudioData, visualizeAudio} from '@remotion/media-utils';
import {Character} from '../../components/Character';
import {HBILighting} from '../../components/HBILighting';
import {useLiveAudioAmplitude} from '../../hooks/useLiveAudioAmplitude';

const MODEL_URL =
  'https://models.readyplayer.me/64f1a7143f2f95f8cfc4f0b5.glb';
const AUDIO_URL = '/assets/demo-line.wav';

function Scene3D({amplitude = 0, interactive = true}) {
  return (
    <Canvas shadows camera={{position: [0, 1.35, 3.2], fov: 32}}>
      <color attach="background" args={['#120c1f']} />
      <fog attach="fog" args={['#120c1f', 5, 13]} />

      <HBILighting />

      <Character modelUrl={MODEL_URL} amplitude={amplitude} />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.15, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#191025" roughness={0.92} metalness={0.04} />
      </mesh>

      <ContactShadows
        position={[0, -1.14, 0]}
        opacity={0.45}
        scale={8}
        blur={2.2}
        far={5}
      />

      {interactive ? <OrbitControls enablePan={false} maxDistance={5} minDistance={2.2} /> : null}
    </Canvas>
  );
}

export function DemoSceneLive() {
  const amplitude = useLiveAudioAmplitude(AUDIO_URL);

  return <Scene3D amplitude={amplitude} interactive />;
}

export function DemoSceneRemotion() {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const audioData = useAudioData(staticFile('assets/demo-line.wav'));

  const amplitude = useMemo(() => {
    if (!audioData) return 0;

    const bars = visualizeAudio({
      fps,
      frame,
      audioData,
      numberOfSamples: 16,
    });

    const avg = bars.reduce((a, b) => a + Math.abs(b), 0) / bars.length;
    return Math.min(Math.max(avg * 4, 0), 1);
  }, [audioData, fps, frame]);

  return (
    <>
      <Audio src={staticFile('assets/demo-line.wav')} />
      <Scene3D amplitude={amplitude} interactive={false} />
    </>
  );
}
