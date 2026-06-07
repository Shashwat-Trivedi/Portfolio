"use client";

import { btnPrimaryLarge } from "./data/constants";

export default function ContactSection() {
  const revealBase = "reveal";

  return (
    <section
      className="relative min-h-[74vh] grid place-items-center border-t border-line py-[clamp(90px,12vh,150px)] max-mobile:py-[100px] max-mobile:pb-[80px]"
      style={{
        backgroundImage: "radial-gradient(rgba(25, 24, 24, 0.18) 1px, transparent 1px)",
        backgroundSize: "26px 26px"
      }}
      id="contact"
    >
      <div className={`relative z-[2] mx-auto w-[min(1340px,calc(100vw-clamp(22px,5vw,48px)*2))] max-mobile:w-[min(100%-24px,1340px)] text-center ${revealBase}`}>
        <span className="absolute left-[-9%] right-auto top-[38%] z-0 leading-none text-[rgba(25,24,24,0.08)] font-[800] text-[clamp(96px,10vw,160px)]">08</span>
        <div className="w-14 h-14 mx-auto mb-[36px] flex items-center justify-center group" aria-hidden="true">
          <div className="grid grid-cols-3 gap-[4px] w-[56px] h-[56px]">
            {Array.from({ length: 9 }).map((_, i) => {
              const isCenter = i === 4;
              const isEdge = [1, 3, 5, 7].includes(i);
              const isInitialVisible = isCenter || isEdge;
              const baseOpacity = isInitialVisible ? "opacity-100" : "opacity-0";

              let animClass = "";
              if (i === 4) {
                animClass = "service-grid-c";
              } else if (i === 1 || i === 7) {
                animClass = "service-grid-tb";
              } else if (i === 3 || i === 5) {
                animClass = "service-grid-lr";
              } else if (i === 0 || i === 8) {
                animClass = "service-grid-tlbr";
              } else if (i === 2 || i === 6) {
                animClass = "service-grid-trbl";
              }

              return (
                <div
                  key={i}
                  className={`w-4 h-4 rounded-[2px] bg-blue shadow-[0_0_10px_rgba(27,93,239,0.6)] ${baseOpacity} ${animClass}`}
                />
              );
            })}
          </div>
        </div>
        <h2 className="font-semibold mb-[24px]">Let&apos;s Connect</h2>
        <div className="max-w-[640px] mx-auto text-[rgba(25,24,24,0.62)] text-base md:text-lg mb-0 flex flex-col gap-3">
          <p>
            I&apos;m always excited to discuss software engineering, internships, open-source projects, hackathons, and new ideas.
          </p>
          <p>
            Whether it&apos;s a project collaboration or just a conversation about technology, feel free to reach out.
          </p>
        </div>
        <div className="w-fit max-w-full mx-auto mt-[32px] mb-[32px] px-4 py-[8px] font-mono text-xs border border-[rgba(100,189,119,0.32)] text-[#3b8549] bg-[rgba(100,189,119,0.08)] text-center leading-relaxed">
          <span className="inline-block w-1.5 h-1.5 mr-2 rounded-full bg-green align-middle" /> Open to internships &amp; select project collaborations
        </div>
        <div className="magnetic-wrap mt-[32px]">
          <a className={btnPrimaryLarge} href="mailto:shashwatrivedi2005@gmail.com">Get In Touch</a>
        </div>
      </div>
    </section>
  );
}
