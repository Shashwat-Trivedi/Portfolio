"use client";

import { useEffect, useRef, useState } from "react";

export function useCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [ringDimensions, setRingDimensions] = useState<{
    width: string;
    height: string;
    borderRadius: string;
  } | null>(null);

  useEffect(() => {
    let hoveredEl: HTMLElement | null = null;
    let hoveredContainer: HTMLElement | null = null;
    let isNavLink = false;
    let mouseX = 0;
    let mouseY = 0;

    const move = (event: MouseEvent) => {
      if (window.innerWidth <= 760) return;

      const clientX = event.clientX;
      const clientY = event.clientY;
      mouseX = clientX;
      mouseY = clientY;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${clientX}px, ${clientY}px) translate(-50%, -50%)`;
      }
      
      if (ringRef.current) {
        if (hoveredEl) {
          if (isNavLink) {
            // Keep ring centered on cursor, but expanded via the is-nav-hovering-ring CSS class
            ringRef.current.animate(
              { transform: `translate(${clientX}px, ${clientY}px) translate(-50%, -50%)` },
              { duration: 460, fill: "forwards", easing: "cubic-bezier(0.16, 1, 0.1, 1)" }
            );
          } else {
            const rect = hoveredContainer 
              ? hoveredContainer.getBoundingClientRect() 
              : hoveredEl.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            if (hoveredContainer) {
              // Calculate delta from center of the static container
              const deltaX = clientX - centerX;
              const deltaY = clientY - centerY;
              
              // Apply magnetic pull to the button child
              const maxPullX = 12;
              const maxPullY = 12;
              const pullX = Math.max(-maxPullX, Math.min(maxPullX, deltaX * 0.22));
              const pullY = Math.max(-maxPullY, Math.min(maxPullY, deltaY * 0.22));
              
              hoveredEl.style.transform = `translate(${pullX}px, ${pullY}px)`;
              
              // Center the ring on the newly translated button center
              const ringX = centerX + pullX;
              const ringY = centerY + pullY;
              
              ringRef.current.animate(
                { transform: `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)` },
                { duration: 220, fill: "forwards", easing: "cubic-bezier(0.25, 1, 0.5, 1)" }
              );
            } else {
              // Standard non-magnetic hover centering
              ringRef.current.animate(
                { transform: `translate(${centerX}px, ${centerY}px) translate(-50%, -50%)` },
                { duration: 240, fill: "forwards", easing: "cubic-bezier(0.16, 1, 0.3, 1)" }
              );
            }
          }
        } else {
          // Not hovering, track mouse normally
          ringRef.current.animate(
            { transform: `translate(${clientX}px, ${clientY}px) translate(-50%, -50%)` },
            { duration: 460, fill: "forwards", easing: "cubic-bezier(0.16, 1, 0.1, 1)" }
          );
        }
      }
    };

    const findNavLink = (el: HTMLElement | null): HTMLElement | null => {
      let current = el;
      while (current && current !== document.body) {
        if (
          current.classList?.contains("nav-link-underline") ||
          current.classList?.contains("nav-link-no-underline") ||
          (current.tagName === "A" && (current.closest("header nav") || current.closest("footer nav")))
        ) {
          return current;
        }
        current = current.parentElement;
      }
      return null;
    };

    const handleMouseOver = (event: MouseEvent) => {
      if (window.innerWidth <= 760) return;
      if (hoveredEl) return; // Locked into active hover bounds

      const target = event.target as HTMLElement;
      if (!target || typeof target.closest !== "function") return;
      
      // Check if hovering a navigation link, logo link, or project link
      const navLink = findNavLink(target);
      if (navLink) {
        hoveredEl = navLink;
        hoveredContainer = null;
        isNavLink = true;
        
        ringRef.current?.classList.add("is-nav-hovering-ring");
        
        setRingDimensions({
          width: "48px",
          height: "48px",
          borderRadius: "50%",
        });
        
        if (ringRef.current) {
          ringRef.current.animate(
            { transform: `translate(${event.clientX}px, ${event.clientY}px) translate(-50%, -50%)` },
            { duration: 240, fill: "forwards", easing: "cubic-bezier(0.36, 1, 0.7, 1)" }
          );
        }
        return;
      }
      
      const magneticWrap = target.closest(".magnetic-wrap") as HTMLElement | null;
      if (magneticWrap) {
        const interactiveEl = magneticWrap.querySelector("a, button") as HTMLElement | null;
        if (interactiveEl) {
          hoveredEl = interactiveEl;
          hoveredContainer = magneticWrap;
          
          // Speed up transitions dynamically during active hover to make it highly responsive but slightly lagging/weighted
          hoveredEl.style.transition = "transform 0.24s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.24s, background-color 0.24s, color 0.24s";
          
          ringRef.current?.classList.add("is-hovering");
          cursorRef.current?.classList.add("is-hovering");
          
          const rect = interactiveEl.getBoundingClientRect();
          const radius = window.getComputedStyle(interactiveEl).borderRadius;
          setRingDimensions({
            width: `${rect.width + 15}px`,
            height: `${rect.height + 15}px`,
            borderRadius: radius,
          });
          
          if (ringRef.current) {
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;
            
            ringRef.current.animate(
              { transform: `translate(${x}px, ${y}px) translate(-50%, -50%)` },
              { duration: 240, fill: "forwards", easing: "cubic-bezier(0.16, 1, 0.3, 1)" }
            );
          }
        }
      } else {
        const interactiveEl = target.closest("a, button, .work-card, .service-card") as HTMLElement | null;
        if (interactiveEl) {
          if (findNavLink(interactiveEl)) {
            return;
          }
          hoveredEl = interactiveEl;
          hoveredContainer = null;
          
          ringRef.current?.classList.add("is-hovering");
          cursorRef.current?.classList.add("is-hovering");
          
          const rect = interactiveEl.getBoundingClientRect();
          const radius = window.getComputedStyle(interactiveEl).borderRadius;
          setRingDimensions({
            width: `${rect.width + 10}px`,
            height: `${rect.height + 10}px`,
            borderRadius: radius,
          });
          
          if (ringRef.current) {
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;
            
            ringRef.current.animate(
              { transform: `translate(${x}px, ${y}px) translate(-50%, -50%)` },
              { duration: 240, fill: "forwards", easing: "cubic-bezier(0.16, 1, 0.3, 1)" }
            );
          }
        }
      }
    };

    const handleMouseOut = (event: MouseEvent) => {
      if (window.innerWidth <= 760) return;
      if (!hoveredEl) return;
      
      const relatedTarget = event.relatedTarget as HTMLElement | null;
      
      if (hoveredContainer) {
        if (!relatedTarget || !hoveredContainer.contains(relatedTarget)) {
          resetHover();
        }
      } else {
        if (!relatedTarget || !hoveredEl.contains(relatedTarget)) {
          resetHover();
        }
      }
    };

    const resetHover = () => {
      if (hoveredEl && !isNavLink) {
        hoveredEl.style.transition = "transform 0.35s cubic-bezier(0.56, 1, 0.63, 1), border-color 0.24s, background-color 0.24s, color 0.24s";
        hoveredEl.style.transform = "";
      }
      hoveredEl = null;
      hoveredContainer = null;
      isNavLink = false;
      
      ringRef.current?.classList.remove("is-hovering");
      ringRef.current?.classList.remove("is-nav-hovering-ring");
      cursorRef.current?.classList.remove("is-hovering");
      setRingDimensions(null);

      // Smoothly animate the ring back to the mouse position on exit
      if (ringRef.current) {
        ringRef.current.animate(
          { transform: `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)` },
          { duration: 580, fill: "forwards", easing: "cubic-bezier(0.16, 1, 0.1, 1)" }
        );
      }
    };

    const handleMouseDown = (event: MouseEvent) => {
      if (window.innerWidth <= 760) return;
      if (event.button !== 0) return; // Only left-clicks trigger cursor click animation
      if (ringRef.current) {
        ringRef.current.classList.add("is-clicking");
      }
    };

    const clearClicking = () => {
      if (ringRef.current) {
        ringRef.current.classList.remove("is-clicking");
      }
    };

    const handleMouseUp = () => {
      if (window.innerWidth <= 760) return;
      clearClicking();
    };

    // When the browser starts a native drag (e.g. on images), mouseup is swallowed.
    // dragstart fires immediately, so we clear the clicking state here too.
    const handleDragStart = () => {
      clearClicking();
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("pointerup", handleMouseUp);
    window.addEventListener("dragstart", handleDragStart);
    window.addEventListener("blur", clearClicking);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("pointerup", handleMouseUp);
      window.removeEventListener("dragstart", handleDragStart);
      window.removeEventListener("blur", clearClicking);
      if (hoveredEl) {
        hoveredEl.style.transform = "";
        hoveredEl.style.transition = "";
      }
    };
  }, []);

  return { cursorRef, ringRef, ringDimensions };
}
