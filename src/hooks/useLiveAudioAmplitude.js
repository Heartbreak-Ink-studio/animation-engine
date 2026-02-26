import {useEffect, useRef, useState} from 'react';

export function useLiveAudioAmplitude(audioSrc) {
  const [amplitude, setAmplitude] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio(audioSrc);
    audio.crossOrigin = 'anonymous';
    audio.loop = true;
    audio.volume = 1;

    const context = new (window.AudioContext || window.webkitAudioContext)();
    const source = context.createMediaElementSource(audio);
    const analyser = context.createAnalyser();

    analyser.fftSize = 512;
    source.connect(analyser);
    analyser.connect(context.destination);

    const buffer = new Uint8Array(analyser.frequencyBinCount);
    let raf;

    const tick = () => {
      analyser.getByteFrequencyData(buffer);
      let sum = 0;
      for (let i = 0; i < buffer.length; i++) sum += buffer[i];
      setAmplitude(sum / buffer.length / 255);
      raf = requestAnimationFrame(tick);
    };

    const start = async () => {
      if (context.state === 'suspended') await context.resume();
      try {
        await audio.play();
      } catch {
        // Browser gesture restrictions may block autoplay until user clicks.
      }
      tick();
    };

    start();
    audioRef.current = audio;

    return () => {
      cancelAnimationFrame(raf);
      audio.pause();
      audio.src = '';
      context.close();
    };
  }, [audioSrc]);

  return amplitude;
}
