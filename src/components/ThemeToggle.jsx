import { flushSync } from "react-dom";
import Icon from "./Icon";

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";

  const handleClick = (e) => {
    const root = document.documentElement;
    const rect = e.currentTarget.getBoundingClientRect();
    // Anchor the circular reveal to the toggle.
    root.style.setProperty("--vt-x", `${rect.left + rect.width / 2}px`);
    root.style.setProperty("--vt-y", `${rect.top + rect.height / 2}px`);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!document.startViewTransition || reduce) {
      onToggle();
      return;
    }
    document.startViewTransition(() => flushSync(() => onToggle()));
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={handleClick}
      role="switch"
      aria-checked={isDark}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title="Toggle theme"
    >
      <span className="theme-toggle__track">
        <Icon name="sun" size={14} className="theme-toggle__sun" />
        <Icon name="moon" size={13} className="theme-toggle__moon" />
        <span className="theme-toggle__thumb" />
      </span>
    </button>
  );
}
