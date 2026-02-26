import React, {useEffect, useMemo, useRef} from 'react';
import {useFrame} from '@react-three/fiber';
import {useGLTF} from '@react-three/drei';
import * as THREE from 'three';

const DEFAULT_MODEL_URL =
  'https://models.readyplayer.me/64f1a7143f2f95f8cfc4f0b5.glb';

const JAW_KEYS = [
  'jawOpen',
  'JawOpen',
  'jaw_open',
  'viseme_aa',
  'viseme_AA',
  'mouthOpen',
];

export function Character({
  modelUrl = DEFAULT_MODEL_URL,
  amplitude = 0,
  position = [0, -1.15, 0],
  scale = 1.55,
}) {
  const group = useRef();
  const mixerRef = useRef(null);
  const jawState = useRef(0);

  const gltf = useGLTF(modelUrl);

  const morphTargets = useMemo(() => {
    const found = [];

    gltf.scene.traverse((obj) => {
      if (!obj.isMesh || !obj.morphTargetDictionary || !obj.morphTargetInfluences) {
        return;
      }

      const dict = obj.morphTargetDictionary;
      const jawKey = JAW_KEYS.find((k) => dict[k] !== undefined);

      if (jawKey) {
        found.push({
          mesh: obj,
          index: dict[jawKey],
        });
      }
    });

    return found;
  }, [gltf.scene]);

  useEffect(() => {
    if (!gltf.animations?.length || !group.current) return;

    const mixer = new THREE.AnimationMixer(group.current);
    const idleClip = gltf.animations[0];
    const action = mixer.clipAction(idleClip);
    action.play();
    mixerRef.current = mixer;

    return () => {
      mixer.stopAllAction();
      mixerRef.current = null;
    };
  }, [gltf.animations]);

  useFrame((_, delta) => {
    mixerRef.current?.update(delta);

    const target = THREE.MathUtils.clamp(amplitude * 2.2, 0, 1);
    jawState.current = THREE.MathUtils.damp(jawState.current, target, 10, delta);

    for (const m of morphTargets) {
      m.mesh.morphTargetInfluences[m.index] = jawState.current;
    }
  });

  return (
    <group ref={group} position={position} scale={scale}>
      <primitive object={gltf.scene} />
    </group>
  );
}

useGLTF.preload(DEFAULT_MODEL_URL);
