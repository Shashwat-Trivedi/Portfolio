import { useEffect } from "react";

interface KeyboardNavigationProps {
  setShowSettings: (show: boolean | ((prev: boolean) => boolean)) => void;
  setShowHelp: (show: boolean | ((prev: boolean) => boolean)) => void;
}

export function useKeyboardNavigation({
  setShowSettings,
  setShowHelp,
}: KeyboardNavigationProps) {
  useEffect(() => {
    let pendingG = false;
    let gTimer: ReturnType<typeof setTimeout> | null = null;

    const clearG = () => {
      pendingG = false;
      if (gTimer) {
        clearTimeout(gTimer);
        gTimer = null;
      }
    };

    const scrollToId = (id: string) => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    const onKey = (event: KeyboardEvent) => {
      // Ignore if user is typing in an input
      const tag = (event.target as HTMLElement).tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;

      // Handle "g then X" combos
      if (pendingG) {
        clearG();
        if (event.key === "h") { scrollToId("home"); return; }
        if (event.key === "p") { scrollToId("work"); return; }
        if (event.key === "s") { scrollToId("services"); return; }
        if (event.key === "c") { scrollToId("contact"); return; }
        if (event.key === ",") { setShowSettings(true); return; }
        return;
      }

      if (event.key === "g" && !event.shiftKey) {
        pendingG = true;
        gTimer = setTimeout(clearG, 500);
        return;
      }

      if (event.key === "?") {
        event.preventDefault();
        setShowHelp((value) => !value);
      }
      if (event.key === "Escape") {
        setShowHelp(false);
        setShowSettings(false);
      }
      if (event.key === "j") window.scrollBy({ top: 360, behavior: "smooth" });
      if (event.key === "k") window.scrollBy({ top: -360, behavior: "smooth" });
      if (event.key === "t") window.scrollTo({ top: 0, behavior: "smooth" });
      if (event.key === "b") window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      clearG();
    };
  }, [setShowSettings, setShowHelp]);
}
