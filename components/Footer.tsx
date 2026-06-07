"use client";

import { navItems } from "./data/constants";
import FooterLines from "./FooterLines";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden grid place-items-center border-t border-line min-h-[78vh] p-[120px_clamp(24px,6vw,80px)_160px] max-mobile:p-[120px_16px_160px]"
      style={{
        background: "linear-gradient(rgba(25, 24, 24, 0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(25, 24, 24, 0.06) 1px,transparent 1px),#f4f4f2",
        backgroundSize: "96px 96px",
      }}
      id="footer"
    >
      <FooterLines />
      <div className="relative z-[2] text-center">
        <h2 className="text-[clamp(44px,8vw,140px)] tracking-[-0.04em]">SHASHWAT</h2>
        <p className="font-mono tracking-[0.04em]">built with intention. maintained with care.</p>
        <div className="flex flex-col md:flex-row items-center justify-center text-center my-12 font-mono gap-x-12 gap-y-4 max-mobile:gap-4 flex-wrap">
          {navItems.map(([label, id]) => (
            <a
              key={id}
              className="nav-link-underline text-[rgba(25,24,24,0.7)] font-normal [--underline-bottom:-4px]"
              href={`#${id}`}
            >
              {label}
            </a>
          ))}
        </div>
        <p className="font-mono tracking-[0.04em] text-[rgba(25,24,24,0.7)]">Made in India // shashwat.2026</p>
      </div>
    </footer>
  );
}
