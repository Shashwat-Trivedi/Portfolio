"use client";

import { useState } from "react";
import { btnPrimary, btnGhost } from "./data/constants";

interface SiteSettingsProps {
  smoothScroll: boolean;
  customCursor: boolean;
  onSave: (settings: { smoothScroll: boolean; customCursor: boolean }) => void;
  onClose: () => void;
}

function Toggle({ checked, onChange }: { checked: boolean; onChange: (val: boolean) => void }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`nav-link-no-underline relative inline-flex h-[26px] w-[48px] shrink-0 items-center rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
        checked ? "bg-blue" : "bg-[rgba(25,24,24,0.18)]"
      }`}
    >
      <span
        className={`pointer-events-none inline-block h-[22px] w-[22px] rounded-full bg-white shadow-sm transition-transform duration-200 ease-in-out ${
          checked ? "translate-x-[22px]" : "translate-x-0"
        }`}
      />
    </button>
  );
}

export default function SiteSettings({ smoothScroll, customCursor, onSave, onClose }: SiteSettingsProps) {
  const [localSmooth, setLocalSmooth] = useState(smoothScroll);
  const [localCursor, setLocalCursor] = useState(customCursor);

  const handleSave = () => {
    onSave({ smoothScroll: localSmooth, customCursor: localCursor });
    onClose();
  };

  return (
    <div
      className="fixed top-1/2 left-1/2 z-[10000] -translate-x-1/2 -translate-y-1/2 border border-line w-[min(520px,calc(100vw-40px))] bg-bg text-ink shadow-[0_30px_80px_rgba(0,0,0,0.15)] after:content-[''] after:fixed after:inset-[-100vmax] after:z-[-1] after:bg-[rgba(244,244,242,0.72)] after:backdrop-blur-[10px]"
      role="dialog"
      aria-modal="true"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-7 pt-6 pb-4">
        <h2 className="font-mono text-[18px] font-normal tracking-[0] m-0">// site.settings</h2>
        <button
          className="border-0 text-[24px] bg-transparent text-[rgba(25,24,24,0.5)] hover:text-ink transition-colors"
          aria-label="Close settings"
          onClick={onClose}
        >
          ✕
        </button>
      </div>

      {/* Settings */}
      <div className="px-7 pb-2">
        {/* Smooth scroll */}
        <div className="flex items-center justify-between py-5 border-b border-line">
          <div>
            <p className="font-sans text-[15px] font-normal m-0">Smooth scroll</p>
            <p className="font-mono text-[12px] font-light text-[rgba(25,24,24,0.52)] m-0 mt-[2px]">Eased scrolling instead of native browser scroll</p>
          </div>
          <Toggle checked={localSmooth} onChange={setLocalSmooth} />
        </div>

        {/* Custom cursor */}
        <div className="flex items-center justify-between py-5">
          <div>
            <p className="font-sans text-[15px] font-normal m-0">Custom cursor</p>
            <p className="font-mono text-[12px] font-light text-[rgba(25,24,24,0.52)] m-0 mt-[2px]">Corner-bracket cursor with trailing ring</p>
          </div>
          <Toggle checked={localCursor} onChange={setLocalCursor} />
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-end gap-3 px-7 py-4 border-t border-line bg-[rgba(25,24,24,0.02)]">
        <div className="magnetic-wrap">
          <button className={btnGhost} onClick={onClose}>cancel</button>
        </div>
        <div className="magnetic-wrap">
          <button className={btnPrimary} onClick={handleSave}>save</button>
        </div>
      </div>
    </div>
  );
}
