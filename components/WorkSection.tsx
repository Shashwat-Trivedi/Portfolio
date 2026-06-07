"use client";

import { projects, delays, btnPrimary } from "./data/constants";

function ProjectShot({ type }: { type: (typeof projects)[number]["shot"] }) {
  if (type === "map") {
    return (
      <div className="relative overflow-hidden h-[230px] rounded-[4px] mt-0 mx-[20px] mb-0 max-mobile:mx-[14px] max-mobile:my-0 bg-[#101318] shadow-[inset_0_0_0_1px_rgba(25,25,25,0.08)] max-mobile:h-[180px] transform scale-100 transition-transform duration-[380ms] ease-in-out group-hover:scale-[1.035]">
        <span className="absolute top-[10px] left-[10px] w-[5px] h-[5px] rounded-full bg-[#ff5f57]" />
        <span className="absolute top-[10px] left-[18px] w-[5px] h-[5px] rounded-full bg-[#ffbd2e]" />
        <span className="absolute top-[10px] left-[26px] w-[5px] h-[5px] rounded-full bg-[#28c840]" />
        <div
          className="absolute inset-0 opacity-35"
          style={{ 
            background: "linear-gradient(35deg, transparent 20%, rgba(255, 255, 255, 0.12) 21% 22%, transparent 23%), linear-gradient(120deg, transparent 35%, rgba(255, 255, 255, 0.1) 36% 37%, transparent 38%), repeating-linear-gradient(90deg, transparent 0 30px, rgba(255, 255, 255, 0.05) 31px 32px)"
          }}
        />
        <div className="absolute font-bold left-[25%] top-[34%] w-[200px] text-white leading-[1.2] text-sm font-mono">
          CleanTrack: Smart Waste Management
        </div>
        <div className="absolute inset-[50%_0_0] bg-gradient-to-t from-[rgba(244,244,242,0.28)] to-transparent opacity-0 transition-opacity duration-[220ms] group-hover:opacity-100" />
      </div>
    );
  }

  if (type === "config") {
    return (
      <div className="relative overflow-hidden h-[230px] rounded-[8px] mt-0 mx-[40px] mb-0 max-mobile:mx-[14px] max-mobile:my-0 bg-[#161616] shadow-[0_18px_32px_rgba(0,0,0,0.25)] max-mobile:h-[180px] transform scale-100 transition-transform duration-[380ms] ease-in-out group-hover:scale-[1.035]">
        <div className="absolute left-0 top-0 bottom-0 w-[18%] bg-[#20252b]" />
        <div className="absolute inset-[26px_24px_40px_25%] bg-[linear-gradient(rgba(25,24,24,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(25,24,24,0.08)_1px,transparent_1px)] bg-[size:100%_28px,80px_100%]" />
        <div className="absolute inset-[50%_0_0] bg-gradient-to-t from-[rgba(244,244,242,0.28)] to-transparent opacity-0 transition-opacity duration-[220ms] group-hover:opacity-100" />
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden grid place-items-center h-[230px] rounded-[6px] mt-0 mx-[60px] mb-0 max-mobile:mx-[14px] max-mobile:my-0 bg-[#121518] max-mobile:h-[180px] transform scale-100 transition-transform duration-[380ms] ease-in-out group-hover:scale-[1.035]">
      <div className="w-[140px] text-center text-white border border-white/10 rounded-[6px] p-[20px_15px_12px] font-mono text-sm">
        <strong>00:00:00</strong>
        <span className="block h-[14px] my-2 rounded-[2px] bg-[rgba(226,83,39,0.9)]" />
        <span className="block h-[14px] my-2 rounded-[2px] bg-[rgba(226,83,39,0.9)]" />
        <span className="block h-[14px] my-2 rounded-[2px] bg-[rgba(226,83,39,0.9)]" />
      </div>
      <div className="absolute inset-[50%_0_0] bg-gradient-to-t from-[rgba(244,244,242,0.28)] to-transparent opacity-0 transition-opacity duration-[220ms] group-hover:opacity-100" />
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
