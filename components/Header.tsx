"use client";

import { useState } from "react";
import { navItems, type Section } from "./data/constants";

interface HeaderProps {
  active: Section;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function Header({ active, isMenuOpen, setIsMenuOpen }: HeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-[1000] h-[58px] flex items-center justify-between px-12 border-b border-line bg-[rgba(244,244,242,0.86)] backdrop-blur-md max-tablet:px-[22px] max-mobile:px-[16px]">
      <a className="nav-link-no-underline group inline-flex items-center gap-[10px] font-mono text-base tracking-[0.02em] transition-colors duration-[240ms]" href="#home" aria-label="Portfolio home">
        <span className="inline-block w-[22px] h-[18px] bg-ink [clip-path:polygon(0_0,100%_0,100%_35%,34%_35%,34%_64%,100%_64%,100%_100%,0_100%)] transition-colors duration-[240ms] group-hover:bg-orange" />
        <span className="transition-colors duration-[240ms] group-hover:text-orange">shashwat</span>
      </a>

      {/* Desktop Navigation */}
      <nav className="flex gap-[clamp(14px,2vw,32px)] max-tablet:gap-4 max-mobile:hidden" aria-label="Primary navigation">
        {navItems.map(([label, id]) => (
          <a
            key={id}
            className={`nav-link-underline relative font-mono text-[rgba(25,24,24,0.68)] text-[13px] tracking-[0.06em] py-[19px] pb-[16px] ${
              active.id === id ? "is-active" : ""
            }`}
            href={`#${id}`}
          >
            {label}
          </a>
        ))}
      </nav>

      {/* Hamburger Toggle Button (Mobile only) */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`hidden max-mobile:flex flex-col justify-center items-center w-8 h-8 gap-[5px] bg-transparent border-0 cursor-pointer z-[1001] transition-opacity duration-200 ${
          isMenuOpen ? "opacity-0 pointer-events-none" : ""
        }`}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <span className={`w-6 h-[2px] bg-ink transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
        <span className={`w-6 h-[2px] bg-ink transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
        <span className={`w-6 h-[2px] bg-ink transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
      </button>
    </header>
  );
}
