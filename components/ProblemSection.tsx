"use client";

import { useMemo } from "react";
import { problemCards, delays } from "./data/constants";

export default function ProblemSection() {
  const mines = useMemo(() => ["1", "2", "3", "*", "1", "2", "1", "*", "3", "1", "2", "1"], []);
  const revealBase = "reveal";

  return (
    <section className="relative overflow-hidden min-h-[88vh] py-[clamp(112px,14vh,180px)]" id="problem">
      <div className="absolute inset-0 pointer-events-none opacity-[0.18]" aria-hidden="true">
        {mines.map((mine, index) => (
          <span
            key={`${mine}-${index}`}
            className="animate-float-cell absolute grid place-items-center font-mono text-2xl w-[74px] h-[74px] bg-[rgba(25,24,24,0.1)]"
            style={{
              left: `${8 + ((index * 13) % 78)}%`,
              top: `${13 + ((index * 19) % 72)}%`,
              animationDelay: `${index * -0.55}s`,
              color: (index + 1) % 4 === 0 ? "rgba(226, 83, 39, 0.38)" : "rgba(25, 24, 24, 0.28)",
            }}
          >
            {mine}
          </span>
        ))}
      </div>
      <div className="relative z-[2] mx-auto w-[min(1340px,calc(100vw-clamp(22px,5vw,48px)*2))] max-mobile:w-[min(100%-24px,1340px)]">
        <span className="absolute right-[4%] top-[7%] z-0 leading-none text-[rgba(25,24,24,0.08)] font-[800] text-[clamp(96px,10vw,160px)]">02</span>
        <div className={`mb-[42px] ${revealBase}`}>
          <h2 className="mb-[18px] font-semibold">What I&apos;m Focused On</h2>
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap gap-[18px]">
          {problemCards.map((card, index) => (
            <article className={`${revealBase} ${delays[index] ?? ""} group relative border border-line bg-[rgba(244,244,242,0.55)] p-[28px] backdrop-blur-sm border-l-4 border-l-orange hover:border-[rgba(226,83,39,0.45)] hover:border-l-[rgba(226,83,39,0.45)] min-h-[170px] max-tablet:min-h-0 w-full md:w-[calc(50%-9px)] lg:flex-1 lg:min-w-[220px]`} key={card.title}>
              <span className="absolute top-[22px] right-[18px] text-[rgba(226,83,39,0.72)] font-mono text-xs">[{String(index + 1).padStart(2, "0")}]</span>
              <h3 className="text-lg mb-2 font-normal group-hover:text-orange">{card.title}</h3>
              <p className="text-[rgba(25,24,24,0.68)] text-[14px] leading-relaxed">{card.text}</p>
            </article>
          ))}
        </div>
        <p className="mt-[42px] max-w-[720px] text-[rgba(25,24,24,0.68)] text-base leading-relaxed">
          Every project teaches something new. My goal is to combine strong engineering fundamentals with practical product development experience.
        </p>
      </div>
    </section>
  );
}
