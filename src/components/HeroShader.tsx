"use client";

import { DotOrbit } from "@paper-design/shaders-react";
import { useEffect, useRef, useState } from "react";

export default function HeroShader() {
  const ref = useRef<HTMLDivElement>(null);
  const [reduced, setReduced] = useState(false);
  const [dim, setDim] = useState({ width: 1440, height: 810 });

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      setDim({ width: Math.round(width) || 1440, height: Math.round(height) || 810 });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

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
      }}
    >
      <DotOrbit
        width={dim.width}
        height={dim.height}
        colors={["#ffffff", "#f97316", "#b8dfc8"]}
        colorBack="#1e5c45"
        stepsPerColor={3}
        size={0.28}
        sizeRange={0.18}
        spreading={0.9}
        speed={reduced ? 0 : 0.35}
        scale={0.28}
      />
    </div>
  );
}
