"use client";

import { useEffect, useState } from "react";
import { sections, type Section } from "../data/constants";

export function useScrollState() {
  const [active, setActive] = useState<Section>(sections[0]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = maxScroll > 0 ? Math.round((window.scrollY / maxScroll) * 100) : 0;
      setProgress(Math.max(0, Math.min(100, nextProgress)));

      const current =
        sections.findLast((section) => {
          const element = document.getElementById(section.id);
          return element ? element.getBoundingClientRect().top <= window.innerHeight * 0.45 : false;
        }) ?? sections[0];
      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return { active, progress };
}
