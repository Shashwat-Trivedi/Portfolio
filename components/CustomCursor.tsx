"use client";

import { useCursor } from "./hooks/useCursor";

interface CustomCursorProps {
  enabled: boolean;
}

export default function CustomCursor({ enabled }: CustomCursorProps) {
  const { cursorRef, ringRef, ringDimensions } = useCursor();

  return (
    <>
      <div
        ref={cursorRef}
        className={`max-mobile:hidden fixed top-0 left-0 z-[100000] pointer-events-none rounded-full w-[6px] h-[6px] bg-ink transition-[width,height,background-color,opacity] duration-[240ms] ease-out [&.is-hovering]:bg-blue ${
          enabled ? "" : "!opacity-0"
        }`}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        style={{
          width: ringDimensions?.width ?? "32px",
          height: ringDimensions?.height ?? "32px",
          borderRadius: ringDimensions?.borderRadius ?? "50%",
        }}
        className={`max-mobile:hidden fixed top-0 left-0 z-[100000] pointer-events-none transition-[width,height,border-radius,opacity] duration-[380ms] ease-out ${
          enabled ? "" : "!opacity-0"
        }`}
        aria-hidden="true"
      >
        <div className="cursor-ring-inner absolute inset-0 rounded-[inherit] border-[1.75px] border-[rgba(49,49,49,0.66)] transition-[border-color] duration-[380ms] ease-out [.is-hovering_&]:border-transparent [.is-nav-hovering-ring_&]:border-blue" />
        {/* Corner brackets */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-[2.50px] border-l-[2.50px] border-blue opacity-0 transition-opacity duration-[240ms] ease-out [.is-hovering_&]:opacity-100" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-[2.50px] border-r-[2.50px] border-blue opacity-0 transition-opacity duration-[240ms] ease-out [.is-hovering_&]:opacity-100" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-[2.50px] border-l-[2.50px] border-blue opacity-0 transition-opacity duration-[240ms] ease-out [.is-hovering_&]:opacity-100" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-[2.50px] border-r-[2.50px] border-blue opacity-0 transition-opacity duration-[240ms] ease-out [.is-hovering_&]:opacity-100" />
      </div>
    </>
  );
}
