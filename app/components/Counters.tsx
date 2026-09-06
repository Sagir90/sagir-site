"use client";

import { useEffect } from "react";

/** Animates every [data-count] numeral once its band scrolls into view. */
export default function Counters() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-count]"));
    if (!nodes.length) return;

    if (reduced) {
      nodes.forEach((n) => { n.textContent = n.dataset.count || n.textContent; });
      return;
    }

    const run = (el: HTMLElement) => {
      const target = Number(el.dataset.count || 0);
      const start = performance.now();
      const DUR = 1100;
      const tick = (now: number) => {
        const t = Math.min((now - start) / DUR, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = String(Math.round(target * eased));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    nodes.forEach((n) => { n.textContent = "0"; });

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (!e.isIntersecting) return;
        run(e.target as HTMLElement);
        io.unobserve(e.target);
      }),
      { threshold: 0.4 }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return null;
}
