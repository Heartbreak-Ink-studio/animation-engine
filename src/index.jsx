import React, {Suspense} from 'react';
import {createRoot} from 'react-dom/client';
import {DemoSceneLive} from './scenes/demo/Scene';

function App() {
  return (
    <div style={{width: '100vw', height: '100vh'}}>
      <Suspense fallback={null}>
        <DemoSceneLive />
      </Suspense>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
