"use client";

import { useEffect, useRef } from "react";

export default function SectionSeparator() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const top = rect.top;
      const height = window.innerHeight;

      // Start fading when the line reaches 45% of the viewport height (approaching the top)
      const fadeStart = height * 0.45;
      // Completely vanished when it reaches 12% of the viewport height
      const fadeEnd = height * 0.12;

      if (top < fadeStart) {
        const ratio = Math.max(0, Math.min(1, (top - fadeEnd) / (fadeStart - fadeEnd)));
        el.style.opacity = (ratio * 0.75).toString();
        el.style.transform = `scaleX(${ratio})`;
      } else {
        el.style.opacity = "0.75";
        el.style.transform = "scaleX(1)";
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative w-full h-[2px] opacity-75 bg-gradient-to-r from-transparent via-blue to-transparent z-[2] origin-center transition-transform duration-75 ease-out"
      style={{ willChange: "transform, opacity" }}
    />
  );
}
