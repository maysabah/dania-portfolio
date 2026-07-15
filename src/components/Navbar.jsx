import { useEffect, useState } from "react";
import Icon from "./Icon";
import ThemeToggle from "./ThemeToggle";
import { navLinks, profile } from "../data/cv";

export default function Navbar({ theme, onToggleTheme, active }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner">
        <a className="nav__logo" href="#about" onClick={() => setOpen(false)}>
          {profile.firstName}
          <span>.</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {navLinks.map((link) => {
            const isActive = `#${active}` === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={isActive ? "is-active" : ""}
                aria-current={isActive ? "true" : undefined}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="nav__actions">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            className="nav__burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? "x" : "menu"} size={22} />
          </button>
        </div>
      </div>

      <nav
        className={`nav__mobile ${open ? "is-open" : ""}`}
        aria-label="Mobile"
        aria-hidden={!open}
      >
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
