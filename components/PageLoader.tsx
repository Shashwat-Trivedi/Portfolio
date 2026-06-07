"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Bypass loader if it has already completed in this session
    const isShown = sessionStorage.getItem("portfolio-loader-completed");
    if (isShown === "true") {
      return;
    }

    setMounted(true);
    document.body.style.overflow = "hidden";

    // Start fade out after 1000ms
    const fadeTimer = setTimeout(() => {
      setVisible(false);
    }, 1000);

    // Unmount after 1400ms (allowing transition to complete)
    const unmountTimer = setTimeout(() => {
      setMounted(false);
      document.body.style.overflow = "";
      sessionStorage.setItem("portfolio-loader-completed", "true");
    }, 1400);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex items-center justify-center bg-[#f4f4f2] transition-opacity duration-400 ease-in-out ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative flex flex-col items-center justify-center">
        <svg
          width="80"
          height="80"
          viewBox="0 0 100 80"
          className="w-[44px] h-[35px]"
          aria-hidden="true"
        >
          <defs>
            <clipPath id="s-clip">
              <path d="M 4,4 L 96,4 L 96,20 L 24,20 L 24,32 L 96,32 L 96,76 L 4,76 L 4,60 L 76,60 L 76,48 L 4,48 Z" />
            </clipPath>
          </defs>
          
          {/* Outer track outline */}
          <path
            d="M 4,4 L 96,4 L 96,20 L 24,20 L 24,32 L 96,32 L 96,76 L 4,76 L 4,60 L 76,60 L 76,48 L 4,48 Z"
            fill="none"
            stroke="#191818"
            strokeWidth="2.5"
            strokeLinejoin="miter"
          />
          
          {/* Animated vertical fill */}
          <g clipPath="url(#s-clip)">
            <rect x="0" y="80" width="100" height="80" fill="#191818">
              <animate
                attributeName="y"
                from="80"
                to="0"
                dur="0.85s"
                fill="freeze"
                calcMode="spline"
                keySplines="0.25 0.1 0.25 1"
                keyTimes="0;1"
              />
            </rect>
          </g>
        </svg>
      </div>
    </div>
  );
}
