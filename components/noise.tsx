"use client";

import { useRef, useEffect } from "react";

interface NoiseProps {
  patternSize?: number;
  patternScaleX?: number;
  patternScaleY?: number;
  patternRefreshInterval?: number;
  patternAlpha?: number;
}

export default function Noise({
  patternSize = 250,
  patternScaleX = 1,
  patternScaleY = 1,
  patternRefreshInterval = 2,
  patternAlpha = 15,
}: NoiseProps) {
  const grainRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = grainRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Create a set of offscreen canvases for animation frames
    // This allows generating noise once on mount and tiling it at 1:1 pixel aspect ratio,
    // avoiding performance lags and uneven horizontal stretching.
    const frameCount = 6;
    const offscreenCanvases: HTMLCanvasElement[] = [];
    const tileSize = patternSize;

    for (let f = 0; f < frameCount; f++) {
      const offscreen = document.createElement("canvas");
      offscreen.width = tileSize;
      offscreen.height = tileSize;
      const oCtx = offscreen.getContext("2d");
      if (oCtx) {
        const imageData = oCtx.createImageData(tileSize, tileSize);
        const data = imageData.data;
        for (let i = 0; i < data.length; i += 4) {
          const value = Math.random() * 255;
          data[i] = value;
          data[i + 1] = value;
          data[i + 2] = value;
          data[i + 3] = patternAlpha;
        }
        oCtx.putImageData(imageData, 0, 0);
        offscreenCanvases.push(offscreen);
      }
    }

    let frame = 0;
    let animationId: number;

    const resize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const loop = () => {
      const frameIndex = Math.floor(frame / patternRefreshInterval) % frameCount;
      const currentPatternCanvas = offscreenCanvases[frameIndex];

      if (currentPatternCanvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const pattern = ctx.createPattern(currentPatternCanvas, "repeat");
        if (pattern) {
          if (typeof DOMMatrix !== "undefined" && pattern.setTransform) {
            const matrix = new DOMMatrix();
            pattern.setTransform(matrix.scale(patternScaleX, patternScaleY));
          }
          ctx.fillStyle = pattern;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
      }

      frame++;
      animationId = window.requestAnimationFrame(loop);
    };

    window.addEventListener("resize", resize);
    resize();
    loop();

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(animationId);
    };
  }, [patternSize, patternScaleX, patternScaleY, patternRefreshInterval, patternAlpha]);

  return (
    <canvas
      className="fixed inset-0 w-full h-full pointer-events-none z-[-1]"
      ref={grainRef}
    />
  );
}
