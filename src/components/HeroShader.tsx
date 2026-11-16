"use client";

import { DotOrbit } from "@paper-design/shaders-react";
import { useEffect, useRef, useState } from "react";

// The animated WebGL background is the heaviest thing on the page, so it only
// runs when it is worth it: a roomy screen, no reduced-motion preference, no
// data-saver, and it pauses whenever the hero is scrolled out of view. Everyone
// else gets the plain green background (set by the hero section itself).
function canAnimate() {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  if (!window.matchMedia("(min-width: 900px)").matches) return false;
  const nav = navigator as Navigator & { deviceMemory?: number; connection?: { saveData?: boolean } };
  if (nav.connection?.saveData) return false;
  if (nav.deviceMemory && nav.deviceMemory < 4) return false;
  if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) return false;
  return true;
}

export default function HeroShader() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [dim, setDim] = useState({ width: 1440, height: 810 });

  // Start only after the page is idle so the shader never delays first paint.
  useEffect(() => {
    if (!canAnimate()) return;
    const start = () => setEnabled(true);
    const w = window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number };
    if (w.requestIdleCallback) {
      const id = w.requestIdleCallback(start, { timeout: 2000 });
      return () => (window as Window & { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback?.(id);
    }
    const t = setTimeout(start, 800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;
    const ro = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      setDim({ width: Math.round(width) || 1440, height: Math.round(height) || 810 });
    });
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting));
    ro.observe(el);
    io.observe(el);
    return () => { ro.disconnect(); io.disconnect(); };
  }, [enabled]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        zIndex: 0,
        pointerEvents: "none",
        opacity: enabled ? 1 : 0,
        transition: "opacity 0.8s ease",
      }}
    >
      {enabled && (
        <DotOrbit
          width={dim.width}
          height={dim.height}
          colors={["#ffffff", "#f97316", "#b8dfc8"]}
          colorBack="#1e5c45"
          stepsPerColor={3}
          size={0.28}
          sizeRange={0.18}
          spreading={0.9}
          speed={visible ? 0.35 : 0}
          scale={0.28}
          maxPixelCount={1920 * 1080}
        />
      )}
    </div>
  );
}
