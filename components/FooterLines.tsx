"use client";

import { useEffect, useRef } from "react";

interface AnimatedLine {
  path: string;
  color: string;
  duration: number;
  delay: number;
  bulbs?: { x: number; y: number }[];
}

const lines: AnimatedLine[] = [
  // 1. Orange: Left edge vertical tracking
  {
    path: "M 25 420 L 25 30 L 220 30 L 220 120",
    color: "rgba(240, 130, 95, 0.55)",
    duration: 6,
    delay: 0,
    bulbs: [{ x: 220, y: 120 }],
  },
  // 2. Purple: Left-to-center horizontal snake framing the contact links
  {
    path: "M 10 150 L 300 150 L 300 320 L 600 320 L 600 240 L 740 240 L 740 420",
    color: "rgba(190, 120, 245, 0.55)",
    duration: 8,
    delay: 1.2,
    bulbs: [{ x: 10, y: 150 }],
  },
  // 3. Green: Bottom left tracking
  {
    path: "M 50 420 L 50 380 L 230 380 L 230 420",
    color: "rgba(120, 205, 140, 0.55)",
    duration: 4,
    delay: 2,
  },
  // 4. Blue: Top-right circuit
  {
    path: "M 980 40 L 760 40 L 760 160 L 580 160 L 580 80",
    color: "rgba(85, 140, 245, 0.55)",
    duration: 7,
    delay: 0.5,
    bulbs: [{ x: 580, y: 80 }],
  },
  // 5. Orange: Right side nested loop
  {
    path: "M 950 30 L 950 280 L 880 280 L 880 140 L 800 140 L 800 420",
    color: "rgba(240, 130, 95, 0.55)",
    duration: 8,
    delay: 1.8,
  },
  // 6. Purple: Outer right-to-bottom circuit
  {
    path: "M 920 10 L 920 400 L 820 400 L 820 340 L 780 340 L 780 420",
    color: "rgba(190, 120, 245, 0.55)",
    duration: 8.5,
    delay: 3,
  },
  // 7. Green: Center-left vertical tracking
  {
    path: "M 280 15 L 280 95 L 120 95 L 120 135",
    color: "rgba(120, 205, 140, 0.55)",
    duration: 5,
    delay: 0.8,
    bulbs: [{ x: 120, y: 135 }],
  },
  // 8. Blue: Left-middle track below y=140
  {
    path: "M 80 180 L 80 340 L 200 340 L 200 220 L 270 220 L 270 300",
    color: "rgba(85, 140, 245, 0.55)",
    duration: 7.5,
    delay: 2.5,
    bulbs: [{ x: 80, y: 180 }, { x: 270, y: 300 }],
  },
  // 9. Blue: Top center border track
  {
    path: "M 350 20 L 700 20 L 700 110 L 630 110",
    color: "rgba(85, 140, 245, 0.55)",
    duration: 6,
    delay: 1.5,
    bulbs: [{ x: 630, y: 110 }],
  },
  // 10. Orange: Left vertical outer track
  {
    path: "M 8 420 L 8 10 L 320 10",
    color: "rgba(240, 130, 95, 0.55)",
    duration: 5.5,
    delay: 0.2,
    bulbs: [{ x: 320, y: 10 }],
  },
  // 11. Green: Middle-right bottom track
  {
    path: "M 560 420 L 560 360 L 710 360 L 710 300",
    color: "rgba(120, 205, 140, 0.55)",
    duration: 5,
    delay: 2.2,
    bulbs: [{ x: 710, y: 300 }],
  },
  // 12. Purple: Top right nested track
  {
    path: "M 780 10 L 900 10 L 900 120 L 820 120 L 820 60",
    color: "rgba(190, 120, 245, 0.55)",
    duration: 6.5,
    delay: 1,
    bulbs: [{ x: 820, y: 60 }],
  },
];

export default function FooterLines() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const paths = svg.querySelectorAll<SVGPathElement>(".footer-anim-path");
    let animFrameId: number;

    const updateBulbs = () => {
      paths.forEach((path, i) => {
        const line = lines[i];
        if (!line) return;
        const bulb = svg.querySelector(`.footer-anim-bulb-${i}`) as SVGCircleElement;
        if (!bulb) return;

        const totalLength = path.getTotalLength();
        const computedStyle = window.getComputedStyle(path);
        const dashoffset = parseFloat(computedStyle.strokeDashoffset);
        const isRunning = path.getAttribute("data-running") === "true";

        if (!isRunning) {
          bulb.style.opacity = "0";
          return;
        }

        let distance = 0;
        let opacity = 0;

        if (dashoffset > 0 && dashoffset <= totalLength) {
          // Phase 1: Drawing (head moves from 0 to totalLength)
          distance = totalLength - dashoffset;
          opacity = 0.95;
        } else if (dashoffset <= 0 && dashoffset > -totalLength) {
          // Phase 2: Erasing (head sits at the end totalLength, tail erases from 0 to totalLength)
          distance = totalLength;
          opacity = 0.95 * (1 + dashoffset / totalLength);
        }

        if (opacity > 0.01) {
          try {
            const point = path.getPointAtLength(distance);
            bulb.setAttribute("cx", point.x.toString());
            bulb.setAttribute("cy", point.y.toString());
            bulb.style.opacity = opacity.toString();
          } catch (e) {
            // Ignored if SVG is not yet mounted or ready
          }
        } else {
          bulb.style.opacity = "0";
        }
      });

      animFrameId = requestAnimationFrame(updateBulbs);
    };

    updateBulbs();

    paths.forEach((path, i) => {
      const line = lines[i];
      if (!line) return;

      const runCycle = () => {
        const totalLength = path.getTotalLength();
        
        path.setAttribute("data-running", "true");

        // Phase 1: HEAD draws the line (tail stays at start)
        // strokeDasharray = totalLength totalLength
        // dashoffset goes from totalLength → 0 (line draws fully)
        path.style.strokeDasharray = `${totalLength} ${totalLength}`;
        path.style.strokeDashoffset = `${totalLength}`;

        const drawAnim = path.animate(
          [{ strokeDashoffset: totalLength }, { strokeDashoffset: 0 }],
          { duration: line.duration * 1000 * 1.5, easing: "ease-in-out", fill: "forwards" }
        );

        drawAnim.onfinish = () => {
          // Phase 2: TAIL erases (head is done, now we erase from start)
          // Switch to: dasharray = totalLength totalLength, but now offset goes 0 → -totalLength
          // This moves the TAIL forward (erases the start)
          const eraseAnim = path.animate(
            [{ strokeDashoffset: 0 }, { strokeDashoffset: -totalLength }],
            { duration: line.duration * 1000 * 1.5, easing: "ease-in-out", fill: "forwards" }
          );

          eraseAnim.onfinish = () => {
            path.setAttribute("data-running", "false");
            drawAnim.cancel();
            eraseAnim.cancel();
            path.style.strokeDashoffset = `${totalLength}`;
            setTimeout(runCycle, 800);
          };
        };
      };

      // Staggered start
      setTimeout(runCycle, line.delay * 1000);
    });

    return () => {
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
      viewBox="0 0 1000 420"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <filter id="line-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      {lines.map((line, i) => (
        <g key={i}>
          {/* Ghost path */}
          <path
            d={line.path}
            fill="none"
            stroke={line.color}
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ opacity: 0.08 }}
          />
          {/* Ghost bulbs */}
          {line.bulbs?.map((bulb, idx) => (
            <circle
              key={`ghost-bulb-${idx}`}
              cx={bulb.x}
              cy={bulb.y}
              r="1.6"
              fill={line.color}
              style={{ opacity: 0.12 }}
            />
          ))}
          {/* Active path */}
          <path
            className="footer-anim-path"
            d={line.path}
            fill="none"
            stroke={line.color}
            strokeWidth="1.0"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#line-glow)"
            style={{ opacity: 0.7 }}
          />
          {/* Active moving head bulb */}
          <circle
            className={`footer-anim-bulb-${i}`}
            r="1.2"
            fill={line.color}
            filter="url(#line-glow)"
            style={{ opacity: 0 }}
          />
        </g>
      ))}
    </svg>
  );
}
