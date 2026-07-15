import { useEffect, useRef, useState } from "react";

/**
 * Counts from 0 to `to` the first time it scrolls into view, with an ease-out
 * curve. Honours reduced-motion by showing the final value immediately.
 */
export default function CountUp({ to, suffix = "", duration = 1500, className }) {
  const ref = useRef(null);
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  // Start at the final value when motion is reduced, else count up from 0.
  const [value, setValue] = useState(() => (reduced ? to : 0));

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;

    let raf = 0;
    let start = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const tick = (t) => {
          if (!start) start = t;
          const p = Math.min((t - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setValue(Math.round(eased * to));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [to, duration, reduced]);

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  );
}
