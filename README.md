# Heartbreak Ink — Animation Engine

URGENT MVP scaffold for: **single character + single voice line + lip sync + MP4 export**.

## What’s Included

### Phase 1: MVP
- **Vite + React Three Fiber + Drei** app for live preview
- **Remotion composition** for MP4 rendering
- `Character.jsx`:
  - Loads remote GLB (ReadyPlayerMe placeholder URL)
  - Plays first embedded animation clip (if present)
  - Drives jaw morph target from audio amplitude
- `HBILighting.jsx`:
  - ACES tone mapping
  - 3-point lighting rig
  - Environment map
  - Bloom post effect
- Demo scene with centered character, grounded shadows, cinematic background
- `manifest.json` scene config

### Phase 2: Theatre.js Integration
- **Visual Timeline Editor**: Theatre.js Studio (loads in dev mode)
- **Keyframeable Components**:
  - `TheatreCamera`: Animate position, rotation, FOV
  - `TheatreLights`: Animate intensity, color, position of 3-point lights
  - `TheatreCharacter`: Animate character transform
- **Remotion Sync**: Maps Remotion frame to Theatre timeline position for perfect sync

## Project Path

`projects/animation-engine/`

## Run

```bash
cd projects/animation-engine
npm install
npm run dev
```

Open the Vite URL in browser. Theatre Studio will appear as an overlay.
Press `Space` to play/pause. Use the timeline to keyframe properties.

## Render MP4

```bash
npm run render
```

This renders the default MVP demo.

To render the Theatre demo:

```bash
npx remotion render remotion/index.jsx Theatre_Demo out/theatre-demo.mp4
```

## Theatre.js Workflow

1.  **Open Studio**: Run `npm run dev` and open the browser.
2.  **Select Object**: Click on an object in the 3D scene or select it from the Outline panel in Theatre Studio.
3.  **Keyframe**: Right-click a property in the details panel to "Sequence" it, then scrub the timeline and adjust values.
4.  **Save**: Theatre automatically saves state to local storage. To persist changes to the repo, click "Export" in the Studio project menu and save the JSON to `src/theatre/state.json` (or similar).
5.  **Commit**: Commit the JSON file to git.
