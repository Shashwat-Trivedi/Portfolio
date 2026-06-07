"use client";

import type { Section } from "./data/constants";
import { useAudio } from "./hooks/useAudio";

interface StatusBarProps {
  active: Section;
  progress: number;
  time: string;
  onShowSettings: () => void;
  onShowHelp: () => void;
}

export default function StatusBar({ active, progress, time, onShowSettings, onShowHelp }: StatusBarProps) {
  const { isPlaying, toggle } = useAudio("/Blinding Lights (Instrumental) (w1LZMplW).mp3");

  const ratio = progress / 100;
  const r = Math.round(27 + 199 * ratio);
  const g = Math.round(93 - 10 * ratio);
  const b = Math.round(239 - 200 * ratio);
  const barColor = `rgb(${r}, ${g}, ${b})`;

  return (
    <aside className="fixed left-0 right-0 bottom-0 z-[1000] h-9 flex items-center gap-[14px] px-4 pb-[1px] border-t border-line bg-[rgba(244,244,242,0.92)] backdrop-blur-[10px] font-mono text-xs text-[rgba(25,24,24,0.68)]" aria-label="Site status">
      <div className="bg-[rgba(25,24,24,0.05)] px-2 py-1 max-tablet:hidden">[MODE: <span className="text-blue">{active.mode}</span>]</div>
      <div className="status-path">// <span className="text-blue">{active.path}</span></div>
      <div className="flex-1" />
      <div className="max-tablet:hidden flex items-center gap-1.5">
        <span className={isPlaying ? "animate-pulse text-blue font-semibold" : ""}>♪</span> Blinding Lights — The Weeknd
      </div>
      <button
        onClick={toggle}
        className="bg-transparent border-0 font-mono text-xs text-[rgba(25,24,24,0.68)] hover:text-blue transition-colors cursor-pointer max-tablet:hidden"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? "⏸ pause" : "▶ play"}
      </button>
      <div className="flex items-center gap-1">
        <span>{progress}</span>%
        <i className="not-italic inline-block w-[72px] h-[3px] bg-[rgba(25,24,24,0.16)] max-tablet:hidden">
          <b className="block h-full font-normal" style={{ width: `${progress}%`, backgroundColor: barColor }} />
        </i>
      </div>
      <div>{time}</div>
      <button className="w-[28px] h-[26px] bg-transparent border border-line font-mono transition-all duration-200 hover:bg-orange hover:text-white hover:border-orange max-tablet:hidden" onClick={onShowSettings}>S</button>
      <button className="w-[28px] h-[26px] bg-transparent border border-line font-mono transition-all duration-200 hover:bg-orange hover:text-white hover:border-orange max-tablet:hidden" onClick={onShowHelp}>?</button>
    </aside>
  );
}
