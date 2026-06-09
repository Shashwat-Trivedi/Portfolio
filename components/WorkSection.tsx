"use client";

import { projects, delays, btnPrimary } from "./data/constants";

function ProjectShot({ type }: { type: (typeof projects)[number]["shot"] }) {
  let imgPath = "";
  let altText = "";

  if (type === "map") {
    imgPath = "/cleantrack.png";
    altText = "CleanTrack";
  } else if (type === "config") {
    imgPath = "/trackdrone.png";
    altText = "Offline Drone Monitoring System";
  } else {
    imgPath = "/cloudclub.png";
    altText = "Cloud Club";
  }

  return (
    <div className="relative overflow-hidden h-[230px] rounded-[6px] mt-0 mx-[20px] max-mobile:mx-[14px] bg-[#121518] border border-[rgba(25,24,24,0.08)] dark:border-white/10 shadow-[0_12px_24px_rgba(0,0,0,0.12)] max-mobile:h-[180px] transform scale-100 transition-transform duration-[380ms] ease-in-out group-hover:scale-[1.035]">
      <img
        src={imgPath}
        alt={altText}
        className="w-full h-full object-cover object-top transition-transform duration-[380ms] ease-in-out group-hover:scale-[1.025]"
      />
      {/* Subtle dark gradient overlay to blend/darken image bottom slightly */}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(16,19,24,0.4)] via-transparent to-transparent pointer-events-none" />
      {/* Hover white fog overlay coming from bottom */}
      <div className="absolute inset-[50%_0_0] bg-gradient-to-t from-[rgba(244,244,242,0.28)] to-transparent opacity-0 transition-opacity duration-[220ms] group-hover:opacity-100 pointer-events-none" />
    </div>
  );
}

export default function WorkSection() {
  const revealBase = "reveal";

  return (
    <section
      className="relative min-h-[94vh] py-[clamp(112px,14vh,180px)] max-mobile:py-[110px] max-mobile:pb-[80px]"
      style={{
        backgroundImage: "radial-gradient(rgba(25, 24, 24, 0.18) 1px, transparent 1px)",
        backgroundSize: "26px 26px"
      }}
      id="work"
    >
      <div className="relative z-[2] mx-auto w-[min(1340px,calc(100vw-clamp(22px,5vw,48px)*2))] max-mobile:w-[min(100%-24px,1340px)]">
        <span className="absolute right-[4%] top-[7%] z-0 leading-none text-[rgba(25,24,24,0.08)] font-[800] text-[clamp(96px,10vw,160px)]">04</span>
        <p className="font-mono tracking-[0.04em] text-[rgba(25,24,24,0.62)] mb-2">// section.work</p>
        <h2 className="mb-[36px] font-semibold">Featured Work</h2>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-[36px] max-tablet:gap-[24px]">
          {projects.map((project, index) => (
            <article
              className={`${revealBase} ${delays[index] ?? ""} project-card group relative border border-line bg-transparent overflow-hidden flex flex-col hover:border-blue hover:shadow-[0_0_0_1px_rgba(27,93,239,0.18)] md:w-[calc(33.333%-24px)] md:min-w-[300px] w-full`}
              key={project.title}
            >
              {/* Top half: Solid light-grey background for the image/mockup */}
              <div className="bg-[rgba(160,159,159,0.26)] border-b border-line py-[20px] max-mobile:py-[14px] overflow-hidden">
                <ProjectShot type={project.shot} />
              </div>
              {/* Bottom half: Less opaque grey background for text/buttons */}
              <div className="bg-[rgba(238,237,237,0.2)] p-[20px_26px_32px] flex-1 flex flex-col">
                <p className="font-mono text-xs text-blue mb-2.5 mt-0 flex items-center">
                  <span className="px-2 py-[4px] mr-2.5 text-orange bg-[rgba(226,83,39,0.12)] text-[11px] font-semibold">{project.year}</span> {project.meta}
                </p>
                <h3 className="text-lg mb-2 font-normal transition-colors duration-[280ms] ease-in-out group-hover:text-blue">{project.title}</h3>
                <p className="text-[rgba(25,24,24,0.68)] text-sm leading-relaxed">{project.text}</p>
                <div className="flex flex-wrap gap-1.5 my-4">
                  {project.tags.map((tag) => <span key={tag} className="px-[8px] py-0.5 border border-line bg-[rgba(25,24,24,0.04)] text-[rgba(25,24,24,0.62)] font-mono text-[11px]">{tag}</span>)}
                </div>
                <a className="nav-link-no-underline text-blue font-mono text-sm mt-auto mt-6 block w-fit transform translate-y-0 transition-transform duration-[280ms] ease-in-out group-hover:-translate-y-2" href="#work">
                  View case study <span className="inline-block transform translate-x-0 transition-transform duration-[280ms] ease-in-out group-hover:translate-x-1.5">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="flex justify-center mt-[36px]">
          <div className="magnetic-wrap">
            <a className={btnPrimary} href="#work">View all projects</a>
          </div>
        </div>
      </div>
    </section>
  );
}
