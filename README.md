# Heartbreak Ink — Animation Engine (Phase 1 MVP)

URGENT MVP scaffold for: **single character + single voice line + lip sync + MP4 export**.

## What’s Included

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

## Project Path

`projects/animation-engine/`

## Run

```bash
cd projects/animation-engine
npm install
npm run dev
```

Open the Vite URL in browser.

## Render MP4

```bash
npm run render
```

Output:

`out/demo.mp4`

## Notes

- Current model URL is a **placeholder ReadyPlayerMe GLB**:
  - `https://models.readyplayer.me/64f1a7143f2f95f8cfc4f0b5.glb`
- Audio asset is currently:
  - `public/assets/demo-line.wav`
- For production-quality lip sync, replace with viseme timeline / Rhubarb in Phase 2.
- If browser blocks autoplay in `dev`, click once in the page to unlock audio.
