"use client";

import { services, delays, btnGhost } from "./data/constants";

export default function ServicesSection() {
  const revealBase = "reveal";

  const getBgColor = (color: string) => {
    if (color === "blue") return "bg-blue";
    if (color === "orange") return "bg-orange";
    return "bg-ink";
  };

  return (
    <section className="relative min-h-[94vh] py-[clamp(112px,14vh,180px)] max-mobile:py-[110px] max-mobile:pb-[80px]" id="services">
      <div className="relative z-[2] mx-auto w-[min(1340px,calc(100vw-clamp(22px,5vw,48px)*2))] max-mobile:w-[min(100%-24px,1340px)]">
        <span className="absolute right-[4%] top-[7%] z-0 leading-none text-[rgba(25,24,24,0.08)] font-[800] text-[clamp(96px,10vw,160px)]">05</span>
        <p className="font-mono tracking-[0.04em] text-[rgba(25,24,24,0.62)] mb-2">// section.builds</p>
        <h2 className="font-semibold mb-10">What I Build</h2>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-[28px]">
          {services.map((service, index) => (
            <article className={`${revealBase} ${delays[index] ?? ""} service-card group relative border border-line bg-[rgba(244,244,242,0.55)] hover:bg-[rgba(27,93,239,0.08)] hover:border-blue transition-all duration-[220ms] p-[28px] backdrop-blur-sm min-h-[220px] md:w-[calc(33.333%-20px)] md:min-w-[280px] w-full`} key={service.title}>
              <div className="w-10 h-10 mb-6 flex items-center justify-start">
                <div className="grid grid-cols-3 gap-[3px] w-[36px] h-[36px]">
                  {Array.from({ length: 9 }).map((_, i) => {
                    const bgColor = getBgColor(service.color);
                    let animClass = "";
                    const isInitialVisible = index === 0
                      ? [0, 2, 6, 8].includes(i)
                      : index === 1
                      ? [3, 4, 5].includes(i)
                      : i === 4;

                    const baseOpacity = isInitialVisible ? "opacity-100" : "opacity-0";

                    if (i === 4) {
                      // Center
                      animClass = "service-grid-c";
                    } else if (i === 1 || i === 7) {
                      // Top Mid & Bottom Mid
                      animClass = "service-grid-tb";
                    } else if (i === 3 || i === 5) {
                      // Left Mid & Right Mid
                      animClass = "service-grid-lr";
                    } else if (i === 0 || i === 8) {
                      // Top Left & Bottom Right
                      animClass = "service-grid-tlbr";
                    } else if (i === 2 || i === 6) {
                      // Top Right & Bottom Left
                      animClass = "service-grid-trbl";
                    }

                    const glowClass = service.color === "blue"
                      ? "shadow-[0_0_8px_rgba(27,93,239,0.55)]"
                      : service.color === "orange"
                      ? "shadow-[0_0_8px_rgba(226,83,39,0.55)]"
                      : "shadow-[0_0_6px_rgba(25,24,24,0.25)]";

                    return (
                      <div
                        key={i}
                        className={`w-2.5 h-2.5 rounded-[1px] ${bgColor} ${baseOpacity} ${animClass} ${glowClass}`}
                      />
                    );
                  })}
                </div>
              </div>
              <h3 className="text-lg mb-2 font-normal transition-colors duration-[220ms] group-hover:text-blue">{service.title}</h3>
              <p className="text-[rgba(25,24,24,0.68)] text-sm leading-relaxed transition-colors duration-[220ms] group-hover:text-blue/80">{service.text}</p>
            </article>
          ))}
        </div>
        <div className="flex justify-center mt-[36px]">
          <div className="magnetic-wrap">
            <a className={btnGhost} href="#contact">Get in touch →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
