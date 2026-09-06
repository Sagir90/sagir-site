"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Adds .is-in to [data-reveal] elements as they enter view, staggered by
 *  their data-reveal group value. Re-scans on route change. */
export default function Reveal() {
  const path = usePathname();

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (reduced) {
      nodes.forEach((n) => n.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          const group = Number(el.dataset.reveal || 1);
          const siblings = Array.from(el.parentElement?.children || []);
          const order = siblings.indexOf(el);
          el.style.transitionDelay = `${Math.min(order, 6) * 70 * group}ms`;
          el.classList.add("is-in");
          io.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.1 }
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [path]);

  return null;
}
