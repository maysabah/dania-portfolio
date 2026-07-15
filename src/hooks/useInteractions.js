import { useEffect } from "react";

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Magnetic elements: `[data-magnetic]` gently drift toward the pointer, giving
 * buttons a tactile, "alive" feel. The wrapper moves (not the button itself) so
 * the button keeps its own hover lift. Disabled for reduced-motion / touch.
 */
export function useMagnetic() {
  useEffect(() => {
    if (prefersReduced() || !window.matchMedia("(pointer: fine)").matches) return;

    const strength = 0.32;
    const els = Array.from(document.querySelectorAll("[data-magnetic]"));
    const teardown = els.map((el) => {
      const onMove = (e) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      };
      const onLeave = () => {
        el.style.transform = "";
      };
      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerleave", onLeave);
      return () => {
        el.removeEventListener("pointermove", onMove);
        el.removeEventListener("pointerleave", onLeave);
      };
    });
    return () => teardown.forEach((fn) => fn());
  }, []);
}

/**
 * Cursor spotlight: `[data-spotlight]` elements track the pointer via
 * `--mx`/`--my` CSS variables, which drive a soft radial sheen in CSS. Cheap
 * (just custom-property writes) and only active while hovering.
 */
export function useSpotlight() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll("[data-spotlight]"));
    const teardown = els.map((el) => {
      const onMove = (e) => {
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
        el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
      };
      el.addEventListener("pointermove", onMove);
      return () => el.removeEventListener("pointermove", onMove);
    });
    return () => teardown.forEach((fn) => fn());
  }, []);
}

/**
 * Subtle 3D tilt for a single element (the profile photo). Rotates toward the
 * pointer to create a depth illusion. Disabled for reduced-motion / touch.
 */
export function useTilt(ref, max = 9) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReduced() || !window.matchMedia("(pointer: fine)").matches) return;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(900px) rotateY(${px * max}deg) rotateX(${-py * max}deg)`;
    };
    const onLeave = () => {
      el.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg)";
    };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [ref, max]);
}
