"use client";

interface BackToTopProps {
  progress: number;
}

export default function BackToTop({ progress }: BackToTopProps) {
  return (
    <button
      className={`fixed !z-[900] grid justify-center backdrop-blur-sm transition-[opacity,transform,border-color] duration-[220ms] hover:border-blue right-7 bottom-12 w-[58px] h-[76px] grid-cols-[repeat(3,7px)] grid-rows-[repeat(3,7px)_1fr] gap-[2px] pt-[18px] border border-[rgba(25,24,24,0.12)] bg-[rgba(244,244,242,0.88)] group overflow-hidden ${
        progress > 10 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none"
      }`}
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      {/* Sliding hover background */}
      <span className="absolute inset-0 bg-[rgba(27,93,239,0.08)] z-0 origin-left scale-x-0 transition-transform duration-[400ms] ease-out group-hover:scale-x-100 pointer-events-none" />

      {Array.from({ length: 9 }, (_, index) => {
        const isCorner = index === 0 || index === 2 || index === 6 || index === 8;
        
        let translateClass = "";
        if (index === 1) translateClass = "group-hover:-translate-y-[2px]";
        else if (index === 3) translateClass = "group-hover:-translate-x-[2px]";
        else if (index === 5) translateClass = "group-hover:translate-x-[2px]";
        else if (index === 7) translateClass = "group-hover:translate-y-[2px]";

        return (
          <span
            key={index}
            className={`w-[7px] h-[7px] relative z-10 transition-all duration-[220ms] ease-out ${translateClass} ${
              isCorner ? "bg-[rgba(25,24,24,0.18)]" : "bg-ink"
            }`}
          />
        );
      })}
      <small className="col-span-3 self-end pb-[7px] font-mono uppercase text-[rgba(25,24,24,0.62)] text-[10px] relative z-10">top</small>
    </button>
  );
}
