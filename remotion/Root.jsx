import React, {Suspense} from 'react';
import {Composition} from 'remotion';
import {DemoSceneRemotion} from '../src/scenes/demo/Scene';
import TheatreScene from '../src/scenes/theatre-demo/Scene';

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="HBI_Demo"
        component={DemoSceneRemotion}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Theatre_Demo"
        component={TheatreScene}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
