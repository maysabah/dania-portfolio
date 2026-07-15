import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "dania-theme";

function safeGet(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function systemPrefersDark() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

// Time-of-day fallback so evenings default to dark even when the OS itself
// hasn't switched appearance.
function isNight() {
  const hour = new Date().getHours();
  return hour >= 19 || hour < 6;
}

function getInitial() {
  const saved = safeGet(STORAGE_KEY);
  if (saved === "light" || saved === "dark") {
    return { theme: saved, source: "user" };
  }
  // Reuse whatever the no-flash inline script already resolved, if present.
  const attr =
    typeof document !== "undefined"
      ? document.documentElement.getAttribute("data-theme")
      : null;
  if (attr === "light" || attr === "dark") {
    return { theme: attr, source: "system" };
  }
  const dark = systemPrefersDark() || isNight();
  return { theme: dark ? "dark" : "light", source: "system" };
}

/**
 * Complete theme system:
 * - Detects the OS colour scheme (and time of day) on first load.
 * - Follows OS changes in real time while the user hasn't chosen manually.
 * - A manual toggle takes over and is persisted to localStorage.
 * - Applies the theme to <html data-theme> so CSS transitions can animate it.
 */
export function useTheme() {
  const [state, setState] = useState(getInitial);

  // Reflect the theme onto the document.
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", state.theme);
    root.style.colorScheme = state.theme;
  }, [state.theme]);

  // Live-follow the OS while the user hasn't overridden it.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e) =>
      setState((s) =>
        s.source === "system"
          ? { theme: e.matches ? "dark" : "light", source: "system" }
          : s
      );
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggle = useCallback(() => {
    setState((s) => {
      const next = s.theme === "dark" ? "light" : "dark";
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* ignore storage errors */
      }
      // Apply synchronously so the View Transition (below) captures the new
      // theme immediately; the effect above re-applies it idempotently.
      const root = document.documentElement;
      root.setAttribute("data-theme", next);
      root.style.colorScheme = next;
      return { theme: next, source: "user" };
    });
  }, []);

  return { theme: state.theme, toggle };
}
