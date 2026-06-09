"use client";

import { useEffect, useState, useRef } from "react";
import { rainColumns, btnPrimary, btnGhost } from "./data/constants";

const CHARACTER_POOL = "人エネルタシホケヌオ0173*+-&%$王子中大小一";
const DECRYPT_POOL = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#$%&*?@+=-_";

function DecryptName() {
  const original = "Shashwat Trivedi";
  const [displayText, setDisplayText] = useState(original);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startDecrypt = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    let iterations = 0;
    
    intervalRef.current = setInterval(() => {
      setDisplayText(() =>
        original
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iterations) {
              return original[index];
            }
            return DECRYPT_POOL[Math.floor(Math.random() * DECRYPT_POOL.length)];
          })
          .join("")
      );

      iterations += 0.5;

      if (iterations >= original.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(original);
      }
    }, 20);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <span
      onMouseEnter={startDecrypt}
      className="cursor-default inline-block select-none whitespace-nowrap"
    >
      {displayText}
    </span>
  );
}

function CodeRainColumn({
  left,
  delay,
  duration,
  size,
  opacity,
  initialChars,
}: {
  left: string;
  delay: string;
  duration: string;
  size: string;
  opacity: number;
  initialChars: readonly string[];
}) {
  const [chars, setChars] = useState<string[]>(() => [...initialChars]);

  useEffect(() => {
    const interval = setInterval(() => {
      setChars((prev) =>
        prev.map((char) => {
          // 45% chance to morph each character on every tick
          if (Math.random() < 0.45) {
            return CHARACTER_POOL[Math.floor(Math.random() * CHARACTER_POOL.length)];
          }
          return char;
        })
      );
    }, 40 + Math.random() * 30); // 40ms to 70ms

    return () => clearInterval(interval);
  }, [initialChars]);

  return (
    <div
      className="animate-fall absolute grid gap-[10px] font-mono font-light pointer-events-none z-[1]"
      style={{
        left,
        top: 0,
        fontSize: size,
        animationDelay: delay,
        animationDuration: duration,
        color: `rgba(25, 24, 24, ${opacity})`,
      }}
      aria-hidden="true"
    >
      {chars.map((char, charIdx) => (
        <span key={charIdx}>{char}</span>
      ))}
    </div>
  );
}

export default function HeroSection() {
  const revealBase = "reveal";

  return (
    <section className="relative overflow-hidden min-h-[94vh] pt-[105px] pb-[clamp(90px,13vh,160px)] grid items-center max-mobile:pt-[110px] max-mobile:pb-[80px]" id="home">
      {rainColumns.map((col, index) => (
        <CodeRainColumn
          key={index}
          left={col.left}
          delay={col.delay}
          duration={col.duration}
          size={col.size}
          opacity={col.opacity}
          initialChars={col.chars}
        />
      ))}
      <div className="relative z-[2] mx-auto w-[min(1340px,calc(100vw-clamp(22px,5vw,48px)*2))] max-mobile:w-[min(100%-24px,1340px)] grid items-center grid-cols-[1.15fr_0.85fr] gap-[clamp(30px,5vw,70px)] max-tablet:flex max-tablet:flex-col-reverse max-tablet:items-center max-tablet:text-center">
        <div className={revealBase}>
          <p className="font-mono text-[rgba(25,24,24,0.62)] mb-2 tracking-[0.04em] text-xs">// system.init</p>
          <p className="font-mono text-blue my-1 mb-[20px] tracking-[0.04em] text-[13px]">
            <span>2 years</span> · <a className="nav-link-underline [--underline-bottom:-6px]" href="#work">5+ projects</a> · <span>3 teams</span>
          </p>
          <h1>
            Hello, I&apos;m
            <br />
            <DecryptName />
          </h1>
          <p className="font-mono tracking-[0.04em] my-3.5 text-[rgba(25,24,24,0.6)] text-[13px]">Full Stack Engineer</p>
          <p className="max-w-[440px] text-[rgba(25,24,24,0.65)] text-[14px] leading-relaxed max-tablet:mx-auto">
            Turning curiosity into software. I enjoy developing full-stack applications, participating in hackathons, and turning ambitious concepts into practical products.
            <br />
            <br />
            <span className="font-mono text-[rgba(25,24,24,0.62)] mb-2 tracking-[0.04em] text-xs">// npx shashwat-trivedi</span>
          </p>
          <div className="flex flex-wrap gap-[14px] mt-8 max-tablet:justify-center">
            <div className="magnetic-wrap">
              <a className={btnPrimary} href="#services">See my approach</a>
            </div>
            <div className="magnetic-wrap">
              <a className={btnGhost} href="#work">Case studies</a>
            </div>
          </div>
        </div>

        <div className={`${revealBase} delay-100 max-tablet:mb-8`}>
          <div className="relative overflow-hidden mr-0 ml-auto max-tablet:mx-auto w-[min(340px,100%)] aspect-[321/400] border border-line bg-faint shadow-[0_20px_48px_rgba(25,24,24,0.06)]">
            <img
              src="/profile_photo.png"
              alt="Shashwat Trivedi Portrait"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(25,24,24,0.06)] to-transparent pointer-events-none" />
            <div className="animate-ascii-reveal absolute inset-0 grid place-items-center text-[rgba(25,24,24,0.68)] font-mono text-[13px] leading-[1.8] bg-[#f4f4f2]/92 backdrop-blur-[1px]">
              0101010101
              <br />
              // scanned subject
              <br />
              full stack systems
              <br />
              &lt;ship it/&gt;
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[34px] text-center font-mono text-[rgba(25,24,24,0.42)] max-tablet:hidden">
        0x01 // the focus <span className="block mt-3 text-[30px]">↓</span>
      </div>
    </section>
  );
}
