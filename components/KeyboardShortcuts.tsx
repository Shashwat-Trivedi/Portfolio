"use client";

interface KeyboardShortcutsProps {
  onClose: () => void;
}

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="inline-block min-w-[24px] text-center px-[6px] py-[2px] border border-line bg-[rgba(25,24,24,0.04)] font-mono text-[12px] font-normal text-ink rounded-[3px]">
      {children}
    </kbd>
  );
}

function ShortcutRow({ keys, label }: { keys: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center justify-between py-[10px] border-b border-[rgba(25,24,24,0.05)]">
      <div className="flex items-center gap-[15px]">{keys}</div>
      <span className="font-mono text-[13.5px] font-light text-[rgba(25,24,24,0.55)]">{label}</span>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] font-medium tracking-[0.14em] uppercase text-blue mt-[16px] mb-[2px]">
      {children}
    </p>
  );
}

export default function KeyboardShortcuts({ onClose }: KeyboardShortcutsProps) {
  const then = <span className="font-mono text-[11px] font-light text-[rgba(25,24,24,0.35)]">then</span>;

  return (
    <div
      className="fixed top-1/2 left-1/2 z-[10000] -translate-x-1/2 -translate-y-1/2 border border-line w-[min(520px,calc(100vw-40px))] bg-bg text-ink shadow-[0_30px_80px_rgba(0,0,0,0.15)] after:content-[''] after:fixed after:inset-[-100vmax] after:z-[-1] after:bg-[rgba(244,244,242,0.72)] after:backdrop-blur-[10px]"
      role="dialog"
      aria-modal="true"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-5 pb-1">
        <h2 className="font-mono text-[17px] font-normal tracking-[0] m-0">// keyboard.shortcuts</h2>
        <button
          className="border-0 text-[20px] bg-transparent text-[rgba(25,24,24,0.4)] hover:text-ink transition-colors"
          aria-label="Close shortcuts"
          onClick={onClose}
        >
          ✕
        </button>
      </div>

      {/* Shortcuts */}
      <div className="px-6 pb-1">
        <SectionLabel>Navigation</SectionLabel>
        <ShortcutRow keys={<Kbd>j</Kbd>} label="Scroll down" />
        <ShortcutRow keys={<Kbd>k</Kbd>} label="Scroll up" />
        <ShortcutRow keys={<Kbd>t</Kbd>} label="Go to top" />
        <ShortcutRow keys={<Kbd>b</Kbd>} label="Go to bottom" />

        <SectionLabel>Quick Jump</SectionLabel>
        <ShortcutRow keys={<><Kbd>g</Kbd>{then}<Kbd>h</Kbd></>} label="Go home" />
        <ShortcutRow keys={<><Kbd>g</Kbd>{then}<Kbd>p</Kbd></>} label="Go to work" />
        <ShortcutRow keys={<><Kbd>g</Kbd>{then}<Kbd>s</Kbd></>} label="Go to services" />
        <ShortcutRow keys={<><Kbd>g</Kbd>{then}<Kbd>c</Kbd></>} label="Go to contact" />

        <SectionLabel>General</SectionLabel>
        <ShortcutRow keys={<Kbd>?</Kbd>} label="Show this help" />
        <ShortcutRow keys={<><Kbd>g</Kbd>{then}<Kbd>,</Kbd></>} label="Site settings" />
        <ShortcutRow keys={<Kbd>Esc</Kbd>} label="Close overlays" />
      </div>

      {/* Footer */}
      <div className="px-6 py-3 border-t border-line">
        <p className="font-mono text-[12.5px] font-light text-[rgba(25,24,24,0.38)] m-0">
          Press <Kbd>?</Kbd> anytime to toggle this panel
        </p>
      </div>
    </div>
  );
}
