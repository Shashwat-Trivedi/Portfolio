"use client";

import { delays } from "./data/constants";

export default function WritingSection() {
  const revealBase = "reveal";

  const items = [
    {
      date: "2025",
      title: "Software Development Intern",
      desc: "Worked on Cloud Club, an AI-powered Salesforce consultant marketplace. Contributed to a professional codebase using Next.js, Express, TypeScript, Docker, and Turborepo architecture.",
      tags: ["Next.js", "Express", "Docker", "Turborepo"],
    },
    {
      date: "2024-Present",
      title: "Hackathons & Innovation",
      desc: "Participated in Smart India Hackathon, ETHGlobal, GDG Hackathons, and other innovation-driven competitions. Built solutions under tight deadlines while strengthening product thinking, teamwork, and engineering skills.",
      tags: ["SIH", "ETHGlobal", "GDHS", "Innovation"],
    },
    {
      date: "2024-current",
      title: "Technical Communities",
      desc: "Active member of Open Source Software Club and Google Developer Student Club. Collaborated on projects, workshops, technical events, and community-driven initiatives while learning from experienced developers.",
      tags: ["OSS Club", "GDSC", "Open Source", "Community"],
    },
  ];

  return (
    <section className="relative overflow-hidden min-h-[80vh] py-[clamp(96px,12vh,150px)] max-mobile:py-[100px] max-mobile:pb-[70px]" id="writing">
      <div className="relative z-[2] mx-auto w-[min(1340px,calc(100vw-clamp(22px,5vw,48px)*2))] max-mobile:w-[min(100%-24px,1340px)]">
        <span className="absolute right-[4%] top-[7%] z-0 leading-none text-[rgba(25,24,24,0.08)] font-[800] text-[clamp(96px,10vw,160px)]">06</span>
        <p className="font-mono tracking-[0.04em] text-[rgba(25,24,24,0.62)] mb-2">// section.experience</p>
        <h2 className="mb-[36px] font-semibold">Experience &amp; Achievements</h2>
        <div className="flex flex-col md:flex-row md:flex-wrap gap-[28px]">
          {items.map((item, index) => (
            <article className={`${revealBase} ${delays[index] ?? ""} project-card writing-card group relative border border-line bg-[rgba(244,244,242,0.55)] p-[28px] max-mobile:p-[20px] backdrop-blur-sm min-h-[200px] hover:border-blue hover:shadow-[0_0_0_1px_rgba(27,93,239,0.18)] md:w-[calc(33.33%-19px)] md:min-w-[280px] w-full`} key={item.title}>
              <time className="text-[rgba(25,24,24,0.62)] font-mono text-xs tracking-[0.12em]">{item.date}</time>
              <h3 className="text-lg mt-3 mb-2 font-normal transition-colors duration-[280ms] ease-in-out group-hover:text-blue">{item.title}</h3>
              <p className="text-[rgba(25,24,24,0.68)] text-sm leading-relaxed">
                {item.desc}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {item.tags.map(tag => (
                  <span className="px-[8px] py-0.5 border border-line bg-[rgba(25,24,24,0.04)] text-[rgba(25,24,24,0.62)] font-mono text-[11px]" key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
