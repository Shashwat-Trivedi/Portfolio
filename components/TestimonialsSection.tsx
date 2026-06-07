"use client";

import { delays } from "./data/constants";

export default function TestimonialsSection() {
  const revealBase = "reveal";

  const timelineItems = [
    { year: "2024", text: "Started B.E. Information Technology at Army Institute of Technology" },
    { year: "2024", text: "Built first full-stack applications and explored modern web technologies" },
    { year: "2024", text: "Participated in Smart India Hackathon" },
    { year: "2024", text: "Won 2nd Runner-Up in FE Debate Competition" },
    { year: "2025", text: "Worked on Cloud Club as a Software Development Intern" },
    { year: "2025", text: "Built CleanTrack and Drone Monitoring projects" },
    { year: "Today", text: "Continuously learning, building, and preparing for larger engineering challenges" },
  ];

  return (
    <section className="relative min-h-[80vh] py-[clamp(96px,12vh,150px)] max-mobile:py-[100px] max-mobile:pb-[70px]" id="proof">
      <div className="relative z-[2] mx-auto w-[min(1340px,calc(100vw-clamp(22px,5vw,48px)*2))] max-mobile:w-[min(100%-24px,1340px)]">
        <span className="absolute right-[4%] top-[7%] z-0 leading-none text-[rgba(25,24,24,0.08)] font-[800] text-[clamp(96px,10vw,160px)]">07</span>
        <p className="font-mono tracking-[0.04em] text-[rgba(25,24,24,0.62)] mb-2">// section.journey</p>
        <h2 className="mb-[48px] font-semibold">Journey So Far</h2>
        
        {/* Timeline container */}
        <div className="relative border-l border-line pl-6 ml-4 space-y-8 max-w-[800px] mx-auto text-left">
          {timelineItems.map((item, index) => (
            <div key={index} className={`${revealBase} ${delays[index] ?? ""} relative flex gap-6 items-start group`}>
              {/* Bullet indicator */}
              <span className="absolute -left-[31px] top-[6px] w-2.5 h-2.5 rounded-full border border-line bg-bg transition-colors duration-200 group-hover:bg-blue group-hover:border-blue" />
              
              <div className="flex-none w-[72px] font-mono text-sm text-blue font-bold pt-[1px]">{item.year}</div>
              <div className="flex-1 font-sans text-[15px] text-[rgba(25,24,24,0.74)] leading-relaxed">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
