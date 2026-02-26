import React, {Suspense} from 'react';
import {Composition} from 'remotion';
import {DemoSceneRemotion} from '../src/scenes/demo/Scene';

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="HBI_Demo"
        component={() => (
          <Suspense fallback={null}>
            <DemoSceneRemotion />
          </Suspense>
        )}
        durationInFrames={120}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
