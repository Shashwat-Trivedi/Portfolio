"use client";

import { btnGhost } from "./data/constants";

export default function AboutSection() {
  const revealBase = "reveal";

  return (
    <section className="relative min-h-[94vh] py-[clamp(112px,14vh,180px)] max-mobile:py-[110px] max-mobile:pb-[80px]" id="about">
      <div className="relative z-[2] mx-auto w-[min(1340px,calc(100vw-clamp(22px,5vw,48px)*2))] max-mobile:w-[min(100%-24px,1340px)]">
        <div className={`border border-line p-[clamp(30px,4.5vw,56px)] ${revealBase}`}>
          <span className="absolute right-[4%] top-[7%] z-0 leading-none text-[rgba(25,24,24,0.08)] font-[800] text-[clamp(96px,10vw,160px)]">03</span>
          <p className="font-mono tracking-[0.04em] text-[rgba(25,24,24,0.62)] mb-2">// section.about</p>
          <h2 className="mb-[36px] font-semibold">Who I Am</h2>
          <div className="flex flex-col md:grid md:grid-cols-[1.15fr_0.85fr] items-center gap-[50px]">
            <div className="max-tablet:text-center max-tablet:flex max-tablet:flex-col max-tablet:items-center">
              <div className="max-w-[700px] mb-6 text-sm md:text-base text-[rgba(25,24,24,0.68)] leading-relaxed flex flex-col gap-4 text-left max-tablet:text-center">
                <p className="font-semibold text-ink text-[clamp(18px,2vw,22px)] leading-snug">
                  I&apos;m Shashwat Trivedi, an Information Technology undergraduate at Army Institute of Technology, Pune.
                </p>
                <p>
                  My journey started with curiosity about how software works and evolved into building full-stack applications, participating in hackathons, and working on industry projects.
                </p>
                <p>
                  I enjoy working across the stack, from creating intuitive user experiences to designing backend systems and databases.
                </p>
                <p>
                  Currently, I&apos;m focused on becoming a strong software engineer by building products, learning from experienced developers, and continuously improving my problem-solving skills.
                </p>
              </div>
              <div className="magnetic-wrap">
                <a className={btnGhost} href="#contact">More about me →</a>
              </div>
            </div>
            <div className="border border-line grid text-center p-[36px_40px] grid-cols-2 gap-[28px_48px] max-mobile:grid-cols-1 w-full">
              {[
                ["2+", "Years Coding", "building software and learning"],
                ["3+", "Major Projects", "full-stack apps and drone systems"],
                ["1+", "Internship Experience", "industry experience at Cloud Club"],
                ["1000+", "Hours Building & Learning", "dedicated to software engineering"],
              ].map(([number, label, sub]) => (
                <div key={label}>
                  <strong className="block text-4xl leading-none font-bold text-ink">{number}</strong>
                  <small className="block font-mono mt-[8px] text-[rgba(25,24,24,0.62)] text-xs font-semibold">{label}</small>
                  <p className="font-mono text-[rgba(25,24,24,0.62)] mt-[8px] text-[11px] leading-relaxed">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
