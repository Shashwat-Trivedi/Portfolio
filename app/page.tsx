"use client";

import { useEffect, useState } from "react";

import { useScrollState } from "../components/hooks/useScrollState";
import { useClock } from "../components/hooks/useClock";
import { useReveal } from "../components/hooks/useReveal";
import { useKeyboardNavigation } from "../components/hooks/useKeyboardNavigation";

import CustomCursor from "../components/CustomCursor";
import PageLoader from "../components/PageLoader";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ProblemSection from "../components/ProblemSection";
import AboutSection from "../components/AboutSection";
import WorkSection from "../components/WorkSection";
import ServicesSection from "../components/ServicesSection";
import WritingSection from "../components/WritingSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import StatusBar from "../components/StatusBar";
import KeyboardShortcuts from "../components/KeyboardShortcuts";
import SmoothScroll from "../components/SmoothScroll";
import SiteSettings from "../components/SiteSettings";
import SectionSeparator from "../components/SectionSeparator";
import { navItems } from "../components/data/constants";


export default function Home() {
  const { active, progress } = useScrollState();
  const time = useClock();
  const [showHelp, setShowHelp] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [smoothScroll, setSmoothScroll] = useState(true);
  const [customCursor, setCustomCursor] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useReveal();
  useKeyboardNavigation({ setShowSettings, setShowHelp });

  // Toggle body class to control native cursor visibility
  useEffect(() => {
    if (customCursor) {
      document.body.classList.add("custom-cursor");
    } else {
      document.body.classList.remove("custom-cursor");
    }
  }, [customCursor]);

  const handleSaveSettings = (settings: { smoothScroll: boolean; customCursor: boolean }) => {
    setSmoothScroll(settings.smoothScroll);
    setCustomCursor(settings.customCursor);
  };

  return (
    <>
      <PageLoader />
      <SmoothScroll enabled={smoothScroll} />
      <div
        className="fixed inset-0 z-[9998] pointer-events-none opacity-14 mix-blend-multiply"
        aria-hidden="true"
      />

      <CustomCursor enabled={customCursor} />
      <Header active={active} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Mobile Navigation Dropdown Menu (Full-Screen Overlay) */}
      {isMenuOpen && (
        <nav className="fixed inset-x-0 top-0 bottom-9 z-[1001] bg-bg/95 backdrop-blur-lg flex flex-col items-center justify-center p-6 animate-fade-in" aria-label="Mobile navigation">
          {/* Title and Close Button */}
          <div className="flex items-center gap-[40px] font-mono text-sm text-[rgba(25,24,24,0.62)] mb-10 select-none">
            <span>// navigation</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-[22px] font-light leading-none text-ink hover:text-orange transition-colors cursor-pointer select-none pb-[1px]"
              aria-label="Close menu"
            >
              ×
            </button>
          </div>

          {/* Links list */}
          <div className="flex flex-col items-center gap-[28px]">
            {navItems.map(([label, id]) => {
              const isActive = active.id === id;
              return (
                <a
                  key={id}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-[22px] tracking-tight transition-colors duration-[240ms] hover:text-blue ${
                    isActive ? "font-normal text-ink font-sans" : "text-[rgba(25,24,24,0.55)] font-sans"
                  }`}
                  href={`#${id}`}
                >
                  {label}
                </a>
              );
            })}
          </div>
        </nav>
      )}

      <main>
        <HeroSection />
        <SectionSeparator />
        <ProblemSection />
        <SectionSeparator />
        <AboutSection />
        <SectionSeparator />
        <WorkSection />
        <SectionSeparator />
        <ServicesSection />
        <SectionSeparator />
        <WritingSection />
        {/* <SectionSeparator />
        <TestimonialsSection /> */}
        <SectionSeparator />
        <ContactSection />
      </main>

      <Footer />
      <BackToTop progress={progress} />
      <StatusBar
        active={active}
        progress={progress}
        time={time}
        onShowSettings={() => setShowSettings(true)}
        onShowHelp={() => setShowHelp(true)}
      />

      {showHelp && <KeyboardShortcuts onClose={() => setShowHelp(false)} />}
      {showSettings && (
        <SiteSettings
          smoothScroll={smoothScroll}
          customCursor={customCursor}
          onSave={handleSaveSettings}
          onClose={() => setShowSettings(false)}
        />
      )}
    </>
  );
}
