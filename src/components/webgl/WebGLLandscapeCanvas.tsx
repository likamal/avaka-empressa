import React, { useEffect, useRef, useState } from 'react';
import { LandscapePreset, sharedLandscapePool } from '../../lib/webglEngine';

interface WebGLLandscapeCanvasProps {
  preset: LandscapePreset;
  speed?: number;
  timeOffset?: number;
  hovered?: boolean;
  className?: string;
}

const FALLBACK_GRADIENTS: Record<LandscapePreset, string> = {
  'emerald-ridge':
    'radial-gradient(ellipse at 70% 35%, rgba(0, 255, 65, 0.16), rgba(0, 59, 0, 0.12) 45%, #020403 85%)',
  'aviation-vector':
    'radial-gradient(ellipse at 30% 60%, rgba(255, 23, 23, 0.14), rgba(0, 255, 65, 0.12) 45%, #020303 85%)',
  'maritime-sonar':
    'radial-gradient(ellipse at 50% 50%, rgba(0, 255, 65, 0.18), rgba(0, 42, 16, 0.14) 50%, #020403 88%)',
  'obsidian-matrix':
    'linear-gradient(135deg, rgba(0, 59, 0, 0.22) 0%, rgba(5, 5, 5, 0.95) 60%, rgba(255, 23, 23, 0.08) 100%)',
  'amber-vault':
    'radial-gradient(ellipse at 60% 45%, rgba(166, 108, 22, 0.16), rgba(0, 255, 65, 0.12) 48%, #030303 86%)',
};

export const WebGLLandscapeCanvas: React.FC<WebGLLandscapeCanvasProps> = ({
  preset,
  speed = 1,
  timeOffset = 0,
  hovered = false,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ok = sharedLandscapePool.register(canvas, preset, speed, timeOffset);
    if (!ok) {
      setFallback(true);
    }
    return () => {
      sharedLandscapePool.unregister(canvas);
    };
  }, [preset, speed, timeOffset]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas && !fallback) {
      sharedLandscapePool.updateHover(canvas, hovered ? 1.0 : 0.0);
    }
  }, [hovered, fallback]);

  if (fallback) {
    return (
      <div
        className={`w-full h-full ${className}`}
        style={{ background: FALLBACK_GRADIENTS[preset] }}
        aria-hidden="true"
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full block ${className}`}
      aria-hidden="true"
    />
  );
};
